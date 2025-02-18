import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch('https://rocket-game-ha04.onrender.com/api/highscore');
    const [data] = await res.json();
    const highscore = {
        name: data.name,
        coins: data.coins

    }
    return NextResponse.json(highscore);
}