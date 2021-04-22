function draw(canvas: HTMLCanvasElement, k: number = 10, ready: number = 0.001, speed: number = 20) {
    if (ready <= 1 && canvas.getContext) {
        const ctx = canvas.getContext('2d');

        const margin = 5
        let mt = (x: number, y: number) =>
            ctx.moveTo(margin + x * k, margin + y * k)
        let lt = (x: number, y: number) =>
            ctx.lineTo(margin + x * k, margin + y * k)
        let arc = (x: number,
                   y: number,
                   radius: number,
                   startAngle: number,
                   endAngle: number,
                   anticlockwise?: boolean) =>
            ctx.arc(margin + x * k, margin + y * k, radius * k, startAngle, endAngle, anticlockwise)

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath()
        ctx.lineWidth = 3
        // S
        arc(2, 6, 2, -Math.PI * 3 / 2, -Math.PI * 3 / 2 * (1 - ready))
        mt(2, 8)
        arc(2, 10, 2, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 3 / 2 * ready))
        // K
        mt(5, 0)
        lt(5, 12 * ready)
        mt(5, 8)
        lt(5 + 3 * ready, 8 - 4 * ready)
        mt(5, 8)
        lt(5 + 3 * ready, 8 + 4 * ready)
        // O
        mt(8, 6)
        arc(10, 6, 2, -Math.PI, -Math.PI * (1 - ready))
        mt(8, 6)
        lt(8, 6.1 + 4 * ready)
        mt(12, 10)
        lt(12, 9.9 - 4 * ready)
        mt(12, 10)
        arc(10, 10, 2, 0, Math.PI * ready)
        // P
        mt(13, 6)
        lt(13, 6 + 10 * ready)
        mt(13, 6)
        arc(15, 6, 2, -Math.PI, -Math.PI + (Math.PI * 2 * ready))
        // A
        mt(20, 6)
        arc(19, 6, 1, 0, Math.PI * (1 + (1 - ready)), true)
        mt(20, 6)
        lt(20, 6 + 6 * ready)
        mt(20, 10)
        arc(18, 10, 2, 0, Math.PI * 2 * ready)
        mt(20, 10)
        ctx.stroke()
        setTimeout(() => draw(canvas, k, ready + 0.01, speed), speed)
    }
}

setTimeout(() => draw(document.getElementById('canvas') as HTMLCanvasElement, 20), 1000)