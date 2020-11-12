// ----------------------------------------------------------------------------------------------------
//                                              HORIZONTAL                                             
// ----------------------------------------------------------------------------------------------------
export function fourHoriz(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece && grid[i][j + 4] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece && grid[i][j + 4] === undefined)
            {
                return [i, j + 4];
            }
        }
    }
    return false;
}

export function threeHorizNone(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && grid[i][j + 2] === piece && 
                grid[i][j + 3] === piece && grid[i][j + 4] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i, j + 4];
            }
        }
    }
    return false;
}

export function threeHorizOne(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 3; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === undefined)
            {
                return [i, j + 3];
            }
        }
    }
    return false;
}

// ----------------------------------------------------------------------------------------------------
//                                               VERTICAL                                              
// ----------------------------------------------------------------------------------------------------
export function fourVert(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === undefined)
            {
                return [i + 4, j];
            }
        }
    }
    return false;
}

export function threeVertNone(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i + 4, j];
            }
        }
    }
    return false;
}

export function threeVertOne(grid, piece)
{
    for (let i = 0; i < grid.length - 3; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === undefined)
            {
                return [i + 3, j];
            }
        }
    }
    return false;
}

// ----------------------------------------------------------------------------------------------------
//                                      DIAGONAL (L to R from TOP)                                     
// ----------------------------------------------------------------------------------------------------
export function fourDiagFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === undefined)
            {
                return [i + 4, j + 4];
            }
        }
    }
    return false;
}

export function threeDiagNoneFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i + 4, j + 4];
            }
        }
    }
    return false;
}

export function threeDiagOneFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 3; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === undefined)
            {
                return [i + 3, j + 3];
            }
        }
    }
    return false;
}

// ----------------------------------------------------------------------------------------------------
//                                      DIAGONAL (R to L from TOP)                                     
// ----------------------------------------------------------------------------------------------------
export function fourDiagFromTR(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = grid[i].length - 1; j > 3; j--)
        {
            if (grid[i][j] === undefined && grid[i - 1][j - 1] === piece && 
                grid[i - 2][j - 2] === piece && grid[i - 3][j - 3] === piece && grid[i - 4][j - 4] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i - 1][j - 1] === piece && 
                grid[i - 2][j - 2] === piece && grid[i - 3][j - 3] === piece && grid[i - 4][j - 4] === undefined)
            {
                return [i - 4, j - 4];
            }
        }
    }
    return false;
}

export function threeDiagNoneFromTR(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = grid[i].length - 1; j > 3; j--)
        {
            if (grid[i][j] === undefined && grid[i - 1][j - 1] === piece && 
                grid[i - 2][j - 2] === piece && grid[i - 3][j - 3] === piece && grid[i - 4][j - 4] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i - 4, j - 4];
            }
        }
    }
    return false;
}

export function threeDiagOneFromTR(grid, piece)
{
    for (let i = 0; i < grid.length - 3; i++)
    {
        for (let j = grid[i].length - 1; j > 2; j--)
        {
            if (grid[i][j] === undefined && grid[i - 1][j - 1] === piece && 
                grid[i - 2][j - 2] === piece && grid[i - 3][j - 3] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i - 1][j - 1] === piece && 
                grid[i - 2][j - 2] === piece && grid[i - 3][j - 3] === undefined)
            {
                return [i - 3, j - 3];
            }
        }
    }
    return false;
}

// ----------------------------------------------------------------------------------------------------
//                                             COMPLETE AI                                             
// ----------------------------------------------------------------------------------------------------
export function gomEZAI(grid, ai, player)
{
    let [row, col];

    if (fourHoriz(grid, ai))
    {
        [row, col] = fourHoriz(grid, ai);
    }
    else if (fourVert(grid, ai))
    {
        [row, col] = fourVert(grid, ai);
    }
    else if (fourDiagFromTL(grid, ai))
    {
        [row, col] = fourDiagFromTL(grid, ai);
    }
    else if (fourDiagFromTR(grid, ai))
    {
        row, col] = fourDiagFromTR(grid, ai);
    }
    /////////////////////////////////////////////////////////////////
    else if (fourHoriz(grid, player))
    {
        [row, col] = fourHoriz(grid, player);
    }
    else if (fourVert(grid, player))
    {
        [row, col] = fourVert(grid, player);
    }
    else if (fourDiagFromTL(grid, player))
    {
        [row, col] = fourDiagFromTL(grid, player);
    }
    else if (fourDiagFromTR(grid, player))
    {
        [row, col] = fourDiagFromTR(grid, player);
    }
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    else if (threeHorizNone(grid, ai))
    {
        [row, col] = threeHorizNone(grid, ai);
    }
    else if (threeVertNone(grid, ai))
    {
        [row, col] = threeVertNone(grid, ai);
    }
    else if (threeDiagNoneFromTL(grid, ai))
    {
        [row, col] = threeDiagNoneFromTL(grid, ai);
    }
    else if (threeDiagNoneFromTR(grid, ai))
    {
        [row, col] = threeDiagNoneFromTR(grid, ai);
    }
    /////////////////////////////////////////////////////////////////
    else if (threeHorizNone(grid, player))
    {
        [row, col] = threeHorizNone(grid, player);
    }
    else if (threeVertNone(grid, player))
    {
        [row, col] = threeVertNone(grid, player);
    }
    else if (threeDiagNoneFromTL(grid, player))
    {
        [row, col] = threeDiagNoneFromTL(grid, player);
    }
    else if (threeDiagNoneFromTR(grid, player))
    {
        [row, col] = threeDiagNoneFromTR(grid, player);
    }
    /////////////////////////////////////////////////////////////////    
    /////////////////////////////////////////////////////////////////    
    else if (threeHorizOne(grid, ai))
    {
        [row, col] = threeHorizOne(grid, ai);
    }
    else if (threeVertOne(grid, ai))
    {
        [row, col] = threeVertOne(grid, ai);
    }
    else if (threeDiagOneFromTL(grid, ai))
    {
        [row, col] = threeDiagOneFromTL(grid, ai);
    }
    else if (threeDiagOneFromTR(grid, ai))
    {
        [row, col] = threeDiagOneFromTR(grid, ai);
    }
    /////////////////////////////////////////////////////////////////
    else if (threeHorizOne(grid, player))
    {
        [row, col] = threeHorizOne(grid, player);
    }
    else if (threeVertOne(grid, player))
    {
        [row, col] = threeVertOne(grid, player);
    }
    else if (threeDiagOneFromTL(grid, player))
    {
        [row, col] = threeDiagOneFromTL(grid, player);
    }
    else if (threeDiagOneFromTR(grid, player))
    {
        [row, col] = threeDiagOneFromTR(grid, player);
    }
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    return [row, col];
}