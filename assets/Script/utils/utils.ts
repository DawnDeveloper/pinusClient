export default class utils {
    static random_string(len: number): string {
        let $chars: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 

        let maxPos: number = $chars.length;
        let str: string = '';
        for (let i = 0; i < len; i++) {
            str += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }

    static randon_int_str(len: number): string {
        let $chars:string = '0123456789'; 
        let maxPos = $chars.length;
        let str: string = '';
        for(let i=0; i<len; i++) {
            str += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }

    static random_int(begin: number, end: number): number {
        let num: number = begin + Math.random() * (end - begin + 1);
        num = Math.floor(num);
        if (num > end) {
            num = end;
        }
        return num;
    }

    static getStrByNumber(index: number) {
        if(index < 0 || index >= 10) {
            return null;
        }
        let str = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        return str[index];
    }
}