import { symbolName } from "typescript";
import DataGet from "./DataGet";


class Main {

    private outer : HTMLElement;

    public constructor(){

        const start = this.makeDom('button') as HTMLButtonElement;
        start.textContent = "ガチャを引く";
        //start.addEventListener('click',this.load);
        start.onclick = () => {
            this.load()
        }
        document.body.appendChild(start);

        const add = this.makeDom('button') as HTMLButtonElement;
        add.textContent = "石を3000獲得する";
        //start.addEventListener('click',this.load);
        add.onclick = () => {
            this.addStone()
        }
        document.body.appendChild(add);

        this.outer = this.makeDom('div');
        this.outer.setAttribute('id','outer');
        document.body.appendChild(this.outer);
    }

    private async load(): Promise<void>{

        this.outer.innerHTML = "";

        const response = await DataGet.get();
        const resJson = await response.json();

        // こんな感じ
        // [{"lank":3,"name":"白井黒子（おてんばメイド）","url":"https://image.boom-app.wiki/wiki/5d15db1…/chara/l/117.jpg?w=600"},]
        
        // 不自然だがこのやり方がいい　この場合のitemは0,1,2
        for(const item in resJson){
            if(resJson[item] == "ガチャ石が足りません。"){
                const parrent = this.makeDom('div');
                parrent.textContent = resJson[item];
                this.outer.appendChild(parrent);
                return;
            }

            this.setUpDom(resJson[item]);
        }
    }

    private async addStone(): Promise<void>{
        await DataGet.add();
    }

    /**
     * 
     * Domを作成します
     * 
     * @param tagName 
     * @returns 
     */
    private makeDom <K extends keyof HTMLElementTagNameMap>  (tagName: K) : HTMLElement | HTMLImageElement{
        return <HTMLElementTagNameMap[K]>document.createElement(tagName);
    }

    private setImageSrc(srcName: string, image: HTMLElement | HTMLImageElement) : void{
        if(image instanceof HTMLImageElement){
            image.src = srcName;
        }
    }

    // anyで受取る・・・
    private setUpDom(j : any) : void {

        const parrent = this.makeDom('div');
        const characterLank = this.makeDom('div');
        const characterName = this.makeDom('div');
        const characterImage = this.makeDom('img');

        characterLank.textContent = "ランク : " + j.lank;
        characterName.textContent = j.name;
        this.setImageSrc(j.url, characterImage);

        parrent.appendChild(characterLank);
        parrent.appendChild(characterName);
        parrent.appendChild(characterImage);

        this.outer.appendChild(parrent);
    }

}

window.onload = () => {
    const main = new Main();
}