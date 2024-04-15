import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';
interface Iprops {
    data: string
    value: number
    target: string
}

export default function Calculator() {
    const [value, setValue] = useState<Iprops["data"]>("")
    const [hasOPerator, setHasOPerator] = useState(false)
    //@ts-ignore
    const valueClick = (e: string | target) => {

        setValue(value + (e.target.value))
    }

    const resetResult = () => {
        setValue("")
    }

    const backClick = () => {
        setValue(value.slice(0, -1))
    }

    const handleResult = () => {
        try {
            const result = eval(value)

            setValue(result.toString())

        } catch (error) {
            setValue("invalid input")
            console.log(error)
        }
    }

    return (
        < Box sx={{ display: "flex", justifyContent: 'center', }} >
            <Paper sx={{ height: 550, width: 400, mt: 15, borderRadius: 10, backgroundColor: "black", boxShadow: "5px 7px 9px" }} elevation={7}>
                <Typography variant='h4' textAlign={"center"} sx={{ color: 'white', mt: 2 }}>E-caculator</Typography>
                <Box
                    sx={{
                        backgroundColor: "gray", width: 350, mt: 2, border: "1px solid black", ml: 3, "& .MuiInputBase-root": {
                            height: 110, fontSize: 28, color: "white"
                        },
                    }}
                    component={TextField}
                    type="text"
                    name="display"
                    value={value}

                />
                <Box sx={{ mt: 2, border: "2px solid gray", width: 370, ml: 1.5, borderRadius: 5, height: 330 }}>

                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", mt: 3 }}>
                        <Button variant="contained" value="1" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>1</Button>

                        <Button variant="contained" value="2" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }} >2</Button>

                        <Button variant="contained" value="3" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>3</Button>

                        <Button variant="contained" value="/" onClick={valueClick} sx={{ width: 30, height: 40, backgroundColor: "#FEA00A", "&:hover": { backgroundColor: "#FEA00A" }, fontSize: 22, fontWeight: 700 }}>/</Button>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", mt: 3 }}>

                        <Button variant="contained" value="4" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>4</Button>

                        <Button variant="contained" value="5" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>5</Button>

                        <Button variant="contained" value="6" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>6</Button>

                        <Button variant="contained" value="*" onClick={valueClick} sx={{ width: 30, height: 40, backgroundColor: "#FEA00A", "&:hover": { backgroundColor: "#FEA00A" }, fontSize: 22, fontWeight: 700 }}>*</Button>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", mt: 3 }}>
                        <Button variant="contained" value="7" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>7</Button>

                        <Button variant="contained" value="8" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>8</Button>

                        <Button variant="contained" value="9" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>9</Button>

                        <Button variant="contained" value="+" onClick={valueClick} sx={{ width: 30, height: 40, backgroundColor: "#FEA00A", "&:hover": { backgroundColor: "#FEA00A" }, fontSize: 22, fontWeight: 700 }}>+</Button>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", mt: 3 }}>
                        <Button variant="contained" value="0" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>0</Button>

                        <Button variant="contained" value="." onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>.</Button>
                        <Button variant="contained" value="%" onClick={valueClick} sx={{ backgroundColor: "#333333", width: 30, height: 40, "&:hover": { backgroundColor: "#333333" }, fontSize: 22, fontWeight: 700 }}>%</Button>
                        <Button variant="contained" value="-" onClick={valueClick} sx={{ width: 30, height: 40, backgroundColor: "#FEA00A", "&:hover": { backgroundColor: "#FEA00A" }, fontSize: 22, fontWeight: 700 }}>-</Button>



                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: "center", mt: 3 }}>
                        <Button variant='contained' onClick={resetResult} sx={{ backgroundColor: "red", width: 130, height: 40, "&:hover": { backgroundColor: "red" }, fontSize: 22, fontWeight: 700 }}>

                            AC
                        </Button>


                        <Button variant='contained' onClick={backClick} sx={{ fontSize: 17, fontWeight: 400, width: 30, height: 40, backgroundColor: "#007FFF", "&:hover": { backgroundColor: "#007FFF" } }}>
                            <BackspaceIcon sx={{ color: 'white', fontSize: 25 }} />
                        </Button>

                        <Button variant='contained' onClick={handleResult} sx={{ fontSize: 22, fontWeight: 700, width: 30, height: 40, backgroundColor: "green", ml: 4, "&:hover": { backgroundColor: "green" } }}>
                            =

                        </Button>


                    </Box>
                </Box>
            </Paper>



        </Box>

    );
}
