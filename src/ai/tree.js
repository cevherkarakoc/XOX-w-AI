export default class Tree{
  constructor(){
    this.score = 0;
    this.i = 0;
    this.j = 0;
    this.children = [];
  }

  addChild (child) {
    this.children.push(child);
  }

  getMaxChild () {
    if(this.children.length === 0) return null; 
    let maxChild = this.children[0];

    for(let i = 1; i < this.children.length; i++){
      let child = this.children[i];
      if(child.score > maxChild.score){
        maxChild = child;
      }else if (child.score === maxChild.score && Math.random() < 0.2){
        maxChild = child;
      }
    }

    return maxChild;
  }

  getMinChild () {
    if(this.children.length === 0) return null; 
    let minChild = this.children[0];

    for(let i = 1; i < this.children.length; i++){
      let child = this.children[i];
      if(child.score < minChild.score){
        minChild = child;
      }else if (child.score === minChild.score && Math.random() < 0.2){
        minChild = child;
      }
    }

    return minChild;
  }
}