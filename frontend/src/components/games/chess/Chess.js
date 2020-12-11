import React, { useState } from 'react';

import ChessGrid from "./ChessGrid";

import "./chess.css";


const Chess = (props) => 
{
    const [turn, setTurn] = useState("dark");
    const [cBoard, setCBoard] = useState([[0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1],
                                      [1, 0, 1, 0, 1, 0, 1, 0]]);
    const [board, setBoard] = useState([["DRook", "DKnight", "DBishop", "DQueen", "DKing", "DBishop", "DKnight", "DRook"], 
                                      ["DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn"], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      ["LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn"], 
                                      ["LRook", "LKnight", "LBishop", "LQueen", "LKing", "LBishop", "LKnight", "LRook"]]);

    return (
        <>
            <h1>Chess</h1>
            <ChessGrid 
                board={board}
                cBoard={cBoard}
                setBoard={setBoard}
                setCBoard={setCBoard} />
        </>
    );
}

export default Chess;
