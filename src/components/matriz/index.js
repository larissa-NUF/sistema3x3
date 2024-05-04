import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MatrizInput = ({matriz, setMatriz}) => {

  const handleChange = (row, column, event) => {
    let copy = [...matriz];
    copy[row][column] = event.target.value.replace( /[^0-9.-]+/g, '');
    setMatriz(copy);
  };

    
    return (
        <div >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '10ch' }
                }}
                noValidate
                autoComplete="off"
            >

                {matriz.map((item, l) => {
                    return (
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}} key={l}>
                            {["x", "y", "z", "r"].map((letra, index) => {
                                return (
                                    <>
                                    {letra == "r" && <Typography style={{
                                        display:"flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    }} variant="paragraph">=</Typography>}
                                    <TextField
                                        hiddenLabel
                                        id="filled-hidden-label-small"
                                        onChange={(e) => handleChange(l, index, e)}
                                        variant="filled"
                                        size="small"
                                        value={matriz[l][index]}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">{letra != "r" ? letra : ""}</InputAdornment>,
                                        }}
                                    />
                                    </>
                                    

                                )

                            })}
                        </div>
                    )
                })}
            </Box>


        </div>
    );
}

export default MatrizInput;