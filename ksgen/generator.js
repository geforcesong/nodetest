const getRnd = () => Math.floor(Math.random() * 100);
const SIGNS = ['+', '-'];

class Question {
    constructor() {
        this.t1 = getRnd();
        this.t2 = getRnd();
        this.sign = SIGNS[getRnd() % 2];
    }

    populate() {
        if (this.sign === '-' && this.t1 < this.t2) {
            const tmp = this.t1;
            this.t1 = this.t2;
            this.t2 = tmp;
        }
        const t1Str = this.t1.toString().padStart(2, ' ');
        const t2Str = this.t2.toString().padStart(2, ' ');

        return `${t1Str} ${this.sign} ${t2Str} =`;
    }
}

function gen() {
    const total = 40;
    const GAP = '                         ';
    const lines = [];
    const lineCount = Math.floor(total/3);
    for(let i=0;i<lineCount;i++){
        const q1 = new Question();
        const q2 = new Question();
        const q3 = new Question();
        lines.push(`${q1.populate()}${GAP}${q2.populate()}${GAP}${q3.populate()}\n`)
    }
    const left=[];
    for(let i=0;i<total - lineCount*3;i++){
        left.push(new Question().populate());
    }
    if(left.length){
        lines.push(left.join(GAP));
    }

    lines.forEach(c => {
        console.log(c);
    })
}


gen();