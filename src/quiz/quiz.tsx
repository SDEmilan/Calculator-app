import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Pagination, Paper, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import  { useState } from 'react';
import { data } from "../quiz/quizdata";
import { useEffect } from 'react';
import React from 'react';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [userAnswers, setUserAnswers] = useState(Array(data.length).fill(null));
    const [showScore, setShowScore] = useState(false);

    console.log(data)

    const previousClick = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
          }
          setShowScore(false)

    }
    const nextClick = () => {
        if (currentQuestion < data.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
          }
          setShowScore(false)


    }
    const pagination = [...Array(data.length)]
    const clickHandler = (index:number) => {
        setCurrentQuestion(index);
      };
      
  const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = e.target.value;
    setUserAnswers(updatedUserAnswers);
  };
  const calculateScore = () => {
    const score = userAnswers.filter((answer, index) => answer === data[index].result).length;
    return <>
    <Box sx={{width:150,height:150,border:"2px solid black",ml:12}}>
        <img style={{marginLeft:"20px"}} src="data:image/jpeg;base64,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" width="100px" height="100px"></img>
      <Typography sx={{textAlign:"center",fontWeight:700}}>Your Score{ `${score}/${data.length}`}</Typography>

    </Box>
    </>;
  };



    return (
        <>

            <Typography textAlign={"center"} variant='h3'>Quiz Application</Typography>
            <Box sx={{ display: "flex", justifyContent: "center",flexDirection:"row" }}>

                <Paper elevation={7} sx={{ height: 450, width: "65%", mt: 10 ,backgroundColor:"pink"}}>
                    <Box sx={{ padding: 7, ml: 10, mt: 2 , display: "flex", justifyContent: "center",flexDirection:"row" }}>
                          <Box sx={{  ml: 65, mt: 2 , display: "flex", justifyContent: "center",flexDirection:"row" }}>
                          {pagination.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    border: '1px solid black',
                    borderRadius: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    cursor: 'pointer',
                    padding: 1,
                    marginRight: 1,
                    height:55,
                    width:55,
                    marginTop:-7,
                    textAlign:"center",
                    backgroundColor: currentQuestion === index ? 'red' : 'white',
                  }}
                 
                  onClick={() => clickHandler(index)}
                >
                 <Box component={"span"} sx={{ml:2.8,mt:2,fontWeight:700}}> {index + 1}</Box>
                 </Typography>
          ))}
                          </Box>
 
                        <Box sx={{ mt: 6 }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", ml: -14 }}>
                          
                                <Box sx={{ color: "green", ml: 0,width:700 }}>
                               <Typography  sx={{ color: "green", ml: -73,width:700,fontSize:30 }}> {data[currentQuestion].id}- {data[currentQuestion].question}</Typography>
                                </Box>

                            </Box>

                           
                            {(
             
              
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                
                                    {data[currentQuestion].option.map((option, index) => (
                                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <input type="radio" name="result" value={option} style={{ marginTop: '20px', marginLeft: '-1950px' }}  checked={userAnswers[currentQuestion] === option}
                                        onChange={handleOptionChange} />
                                        <Typography variant="h6" sx={{ mt: -3,ml:-83}}>
                                            {option}
                                        </Typography>
                                        </Box>
                                    ))}
                                    </Box>
             
                            )}

                            <Box sx={{ mt: 4,ml:-70 }}>
                                <Button variant='contained' sx={{ ml: -18 }} onClick={previousClick} >Prev</Button>
                                <Button variant='contained' sx={{ ml: 15 }} onClick={nextClick}>Next</Button>
                            </Box>
                            <Box sx={{position:"absolute",top:330,left:780}}>
                            <Button
                                variant="contained"
                                sx={{ ml: 15 }}
                                onClick={() => setShowScore(true)}
                                onBlur={()=>setShowScore(false)}
                            >
                                Result
                            </Button>
                            {showScore && (
                                <Typography variant="h5" sx={{ mt: 2 }}>
                                {calculateScore()}
                                </Typography>
                            )}
                            </Box>
                        </Box>  
                    </Box>





                </Paper >

            </Box >
        </>
    )
}
