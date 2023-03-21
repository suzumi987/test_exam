
type resExam2 = { [key: string]: number }

function solution(value: number, pay: number): { data: string } {
    const m = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    let fPay = pay - value;
    const a = m.filter((l) => fPay >= l);
    console.log(fPay, a);
    const res: resExam2 = {};

    for (let i = a.length - 1; i >= 0; i--) {
        const s = Math.floor(fPay / a[i])

        if (res[`${a[i]}`]) res[`${a[i]}`] += s
        else res[`${a[i]}`] = s

        fPay = fPay % a[i]
    }


    return { data: mapRes(res) }
}

function mapRes(r: resExam2): string {
    const res: string[] = []
    for (const i of Object.keys(r)) {
        if (!r[i]) continue
        if (Number(i) < 20) {
            res.push(`เหรียญ ${i} ${r[i]} เหรียญ`)
        } else {
            res.push(`แบงค์ ${i} ${r[i]} ใบ`)
        }
    }
    return `ทอนด้วย ${res.join(', ')}`

}


export default solution