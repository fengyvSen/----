interface Constroctor{
    new (...arg):any;
    prototype:any;
}
function instanceOf<L,R extends Constroctor>(LeftValue:L, RightValue:R) {
    let O=RightValue.prototype;
    let L=Object.getPrototypeOf(LeftValue);
    while (true) {
        if(L===null)return false;
        if(L===O)return true;
        L=Object.getPrototypeOf(L);
    }
}