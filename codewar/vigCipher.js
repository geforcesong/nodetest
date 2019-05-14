class VigenèreCipher{
    constructor(key, abc){
        this.abc = abc;
        this.key = key;
    }

    encode(str){
        let password = this.getPassword(str);
        if(!str){
            return str;
        }
        let ret = [];
        for(let i=0;i<str.length;i++){
            const step = this.abc.indexOf(password[i]);
            const charPos = this.abc.indexOf(str[i]);
            if(!step<0 || charPos<0){
                ret.push(str[i])
            } else{
                let newPos = (charPos + step)%this.abc.length;
                ret.push(this.abc[newPos])
            }
        }
        return ret.join('');
    }

    decode(str){
        let password = this.getPassword(str);
        if(!str){
            return str;
        }
        let ret = [];
        for(let i=0;i<str.length;i++){
            const step = this.abc.indexOf(password[i]);
            const charPos = this.abc.indexOf(str[i]);
            if(!step<0 || charPos<0){
                ret.push(str[i])
            } else{
                let newPos = (charPos - step)
                if(newPos <0){
                    newPos += this.abc.length;
                }
                ret.push(this.abc[newPos])
            }
        }
        return ret.join('');
    }

    getPassword(str){
        if(!str) return str;
        let password = this.key;
        while(password.length < str.length){
            password += password
        }
        if(password.length > str.length){
            password = password.substring(0, str.length);
        }
        return password;
    }
}

const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "password"
const c = new VigenèreCipher(key, abc);
var en = c.encode('codewars');
console.log(en);
var de = c.decode(en);
console.log(de);