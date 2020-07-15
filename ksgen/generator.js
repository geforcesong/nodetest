const getRnd = () => Math.floor(Math.random() * 100);
const SIGNS = ['+', '-'];
const PDFDocument = require('pdfkit');
const fs = require('fs');

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

function gen(doc, date, isFirst) {
    const total = 40;
    const GAP = '                         ';
    const lines = [];
    const lineCount = Math.floor(total / 3);
    for (let i = 0; i < lineCount; i++) {
        const q1 = new Question();
        const q2 = new Question();
        const q3 = new Question();
        lines.push(`${q1.populate()}${GAP}${q2.populate()}${GAP}${q3.populate()}\n`)
    }
    const left = [];
    for (let i = 0; i < total - lineCount * 3; i++) {
        left.push(new Question().populate());
    }
    if (left.length) {
        lines.push(left.join(GAP));
    }
    genPdf(doc, date,lines, isFirst);
}

function genPdf(doc, date, lines, isFirst) {
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    const dateStr = `${ye}-${mo}-${da}`;
    if(!isFirst){
        doc.addPage();
    }
    lines.forEach((line, index) => {
        doc
            .fontSize(18)
            .text(line, 50, (index + 1) * 45);
    })

    doc.font('/System/Library/Fonts/PingFang.ttc', 'PingFangSC-Regular')
        .fontSize(12).text(`郭一辰（${dateStr}）`, 10, 10);
    
}

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(`/Users/george/Downloads/kousuan/ks.pdf`));

const days = 48;
let current = new Date();
for (let i = 0; i < days; i++) {
    gen(doc, current, i===0);
    current.setDate(current.getDate() + 1)
}
doc.end();