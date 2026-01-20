import React, { useState } from 'react'

export default function Calculator() {

// value1 are connected to credit hours div  
const [ value1 , setvalue1 ] = useState(4);
const [ value2 , setvalue2 ] = useState(4);
const [ value3 , setvalue3 ] = useState(3);
const [ value4 , setvalue4 ] = useState(3);
const [ value5 , setvalue5 ] = useState(2);
const [ value6 , setvalue6 ] = useState(1);

// Values are connected to Grades Points
const [ GradesPointsvalue1 , GradesPointssetvalue1 ] = useState(4);
const [ GradesPointsvalue2 , GradesPointssetvalue2 ] = useState(4);
const [ GradesPointsvalue3 , GradesPointssetvalue3 ] = useState(4);
const [ GradesPointsvalue4 , GradesPointssetvalue4 ] = useState(4);
const [ GradesPointsvalue5 , GradesPointssetvalue5 ] = useState(4);
const [ GradesPointsvalue6 , GradesPointssetvalue6 ] = useState(4);

// values are connected to Semester Result div
const [ SemesterResultvalue1 , setSemesterResultvalue1 ] = useState(3.71);
const [ SemesterResultvalue2 , setSemesterResultvalue2 ] = useState(3.84);
const [ SemesterResultvalue3 , setSemesterResultvalue3 ] = useState(4.00);
const [ SemesterResultvalue4 , setSemesterResultvalue4 ] = useState(0);
const [ SemesterResultvalue5 , setSemesterResultvalue5 ] = useState(0);
const [ SemesterResultvalue6 , setSemesterResultvalue6 ] = useState(0);
const [ SemesterResultvalue7 , setSemesterResultvalue7 ] = useState(0);
const [ SemesterResultvalue8 , setSemesterResultvalue8 ] = useState(0);


// values are connected to  Last Semester Result credits div
const [ Resultcreditsvalue1 , setResultcreditsvalue1 ] = useState(10);
const [ Resultcreditsvalue2 , setResultcreditsvalue2 ] = useState(10);
const [ Resultcreditsvalue3 , setResultcreditsvalue3 ] = useState(10);
const [ Resultcreditsvalue4 , setResultcreditsvalue4 ] = useState(0);
const [ Resultcreditsvalue5 , setResultcreditsvalue5 ] = useState(0);
const [ Resultcreditsvalue6 , setResultcreditsvalue6 ] = useState(0);
const [ Resultcreditsvalue7 , setResultcreditsvalue7 ] = useState(0);
const [ Resultcreditsvalue8 , setResultcreditsvalue8 ] = useState(0);


// for Gpa / cgpa 

const [ GetGpa , setGpa ] = useState(0);
const [ Getcgpa , setcgpa ] = useState(0);

function Calculate(){

    let creditHours=[
       parseFloat(value1),
       parseFloat(value2),
       parseFloat(value3),
       parseFloat(value4),
       parseFloat(value5),
       parseFloat(value6)
    ]

    let grades=[
        parseFloat(GradesPointsvalue1),
        parseFloat(GradesPointsvalue2),
        parseFloat(GradesPointsvalue3),
        parseFloat(GradesPointsvalue4),
        parseFloat(GradesPointsvalue5),
        parseFloat(GradesPointsvalue6)
        
    ]

    let semresult =[
        parseFloat(SemesterResultvalue1),
        parseFloat(SemesterResultvalue2),
        parseFloat(SemesterResultvalue3),
        parseFloat(SemesterResultvalue4),
        parseFloat(SemesterResultvalue5),
        parseFloat(SemesterResultvalue6),
        parseFloat(SemesterResultvalue7),
        parseFloat(SemesterResultvalue8)
        
    ]

    let semcredit =[
        parseFloat(Resultcreditsvalue1),
        parseFloat(Resultcreditsvalue2),
        parseFloat(Resultcreditsvalue3),
        parseFloat(Resultcreditsvalue4),
        parseFloat(Resultcreditsvalue5),
        parseFloat(Resultcreditsvalue6),
        parseFloat(Resultcreditsvalue7),
        parseFloat(Resultcreditsvalue8)
        
    ]

    // GPA
    let total1 = 0;
    let total2 = 0;

    for(let i=0; i<creditHours.length; i++) {
    total1 += creditHours[i] * grades[i];
    total2 += creditHours[i];
    }

    let gpa = total1 / total2 ;

    // CGPA

    let total3 = 0;
    let total4 = 0;
    for(let i = 0; i < semresult.length; i++ ){
    total3 += semresult[i] * semcredit[i];
    total4 += semcredit[i];
}

    let cgpa = total3 / total4;

    setGpa(gpa)
    setcgpa(cgpa)
}


function  Reaset () {
    setGpa (0.00);
    setcgpa(0.00);

    // value1 are connected to credit hours div  
    setvalue1(0.00);
    setvalue2(0.00);
    setvalue3(0.00);
    setvalue4(0.00);
    setvalue5(0.00);
    setvalue6(0.00);

    // Values are connected to Grades Points
    GradesPointssetvalue1(0.00);
    GradesPointssetvalue2(0.00);
    GradesPointssetvalue3(0.00);
    GradesPointssetvalue4(0.00);
    GradesPointssetvalue5(0.00);
    GradesPointssetvalue6(0.00);

    // values are connected to Semester Result div
    setSemesterResultvalue1(0.00);
    setSemesterResultvalue2(0.00);
    setSemesterResultvalue3(0.00);
    setSemesterResultvalue4(0.00);
    setSemesterResultvalue5(0.00);
    setSemesterResultvalue6(0.00);
    setSemesterResultvalue7(0.00);
    setSemesterResultvalue8(0.00);

    // values are connected to  Last Semester Result credits div
    setResultcreditsvalue1(0.00);
    setResultcreditsvalue2(0.00);
    setResultcreditsvalue3(0.00);
    setResultcreditsvalue4(0.00);
    setResultcreditsvalue5(0.00);
    setResultcreditsvalue6(0.00);
    setResultcreditsvalue7(0.00);
    setResultcreditsvalue8(0.00);
}



return (
    <>
    <div className="bg-[linear-gradient(100deg,rgb(7,20,65)_0%,rgb(7,25,92)_50%)] text-white p-5 overflow-hidden " >
    
        <div className='flex items-center justify-center text-center'>
            <header className='text-center text-[25px] mb-5 bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] shadow-[0_0_20px_black] rounded-[20px] p-4 w-[300px] '>
                <h1>GPA CALCULATOR</h1>
            </header>
        </div>

        <div className='items-center justify-center text-center ' >

            <div className="bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] justify-center items-center text-center flex shadow-[0_0_20px_black] rounded-[15px] p-4 mb-15 mr-5 ml-5 ">
            <div  > 
                <h3 className='mt-5 mb-4 text-[25px] text-center sm:text-10 '>Enter credit hours:</h3>

                <input 
                
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                type="number" 
                value={value1} 
                onChange={(e) => setvalue1(e.target.value)} 
                />

                <input 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                type="number" 
                value={value2} 
                onChange={(e) => setvalue2(e.target.value)} 
                />

                <input type="number"
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                 value={value3} 
                onChange={(e) => setvalue3(e.target.value)} 
                />
                <br />
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={value4} 
                onChange={(e) => setvalue4(e.target.value)} 
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={value5} 
                onChange={(e) => setvalue5(e.target.value)} 
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={value6} 
                onChange={(e) => setvalue6(e.target.value)}  
                />

            </div>
            </div>

            <div className="bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] justify-center items-center text-center flex shadow-[0_0_20px_black] rounded-[15px] p-4 mb-15 mr-5 ml-5 " >
            <div className=" mt-5 mb-5  ">
                <h3 className='mb-4 text-[25px] text-center'>Enter Grades Points</h3>

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue1} 
                onChange={(e) => GradesPointssetvalue1(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue2} 
                onChange={(e)=>GradesPointssetvalue2(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue3} 
                onChange={(e)=>GradesPointssetvalue3(e.target.value)}
                />
                <br />
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue4} 
                onChange={(e)=>GradesPointssetvalue4(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue5} 
                onChange={(e)=>GradesPointssetvalue5(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-5 ml-5 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={GradesPointsvalue6} 
                onChange={(e)=>GradesPointssetvalue6(e.target.value)}
                />

            </div>
           
            </div>
        </div>

           <div className=" ">
             <div className="bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] justify-center items-center text-center shadow-[0_0_20px_black] rounded-[15px] p-4 mb-20 mr-5 ml-5 ">
                <h3 className='mt-3 mb-3 text-[25px] text-center'>Enter Last Semester Result:</h3>
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue1} 
                onChange={(e)=>setSemesterResultvalue1(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue2} 
                onChange={(e)=>setSemesterResultvalue2(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue3} 
                onChange={(e)=>setSemesterResultvalue3(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue4} 
                onChange={(e)=>setSemesterResultvalue4(e.target.value)}
                />
                <br />
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue5} 
                onChange={(e)=>setSemesterResultvalue5(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue6} 
                onChange={(e)=>setSemesterResultvalue6(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-10 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400 '
                value={SemesterResultvalue7} 
                onChange={(e)=>setSemesterResultvalue7(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={SemesterResultvalue8} 
                onChange={(e)=>setSemesterResultvalue8(e.target.value)}
                />
            </div>

          <div className="bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] justify-center items-center text-center shadow-[0_0_20px_black] rounded-[15px] p-5  mb-20  m-5">
                <h3 className='text-[30px]'>
                    Enter Last Semester Result Credits:
                    </h3>
               
               <input type="number" 
               className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-1 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue1} 
                onChange={(e)=>setResultcreditsvalue1(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue2} 
                onChange={(e)=>setResultcreditsvalue2(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue3} 
                onChange={(e)=>setResultcreditsvalue3(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue4} 
                onChange={(e)=>setResultcreditsvalue4(e.target.value)}
                />
                <br />
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue5} 
                onChange={(e)=>setResultcreditsvalue5(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue6} 
                onChange={(e)=>setResultcreditsvalue6(e.target.value)}
                />
                
                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-2 mt-3 cursor-pointer hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue7} 
                onChange={(e)=>setResultcreditsvalue7(e.target.value)}
                />

                <input type="number" 
                className='shadow-[0_0_20px_black] rounded-[10px] outline-none p-2 text-[20px] border-2 border-cyan-400 rounded-[10px] w-[190px] pl-4 pt-2 pb-2 mr-2 ml-2 mb-10 mt-3 cursor-pointer
                hover:scale-[1.1] hover:border-[white] hover-border-2 transition-transform duration-400'
                value={Resultcreditsvalue8} 
                onChange={(e)=>setResultcreditsvalue8(e.target.value)}
                />
            </div>

            <div className='flex text-center justify-center items-center'>

            <div className='bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] text-2xl shadow-[0_0_20px_black] rounded-[15px] text-center justify-center items-center flex flex-col m-5 w-[300px] p-5'>
            
            <p className='  w-[230px] shadow-[0_0_10px_black] rounded-[15px] mt-2 mb-2 mr-2 ml-2 p-2 text-center text-[25px] tracking-[2px]'>
                Your GPA = {GetGpa.toFixed(2)}</p>
            <p className='  w-[230px] shadow-[0_0_10px_black] rounded-[15px] mt-2 mb-2 mr-1 ml-1 p-4 text-center text-[20px] tracking-[2px]'>
                Your CGPA = {Getcgpa.toFixed(2)}</p>
            </div>
            </div>

            <div className='flex text-center justify-center items-center '>
             <div className='text-center mt-10 bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] shadow-[0_0_20px_black] rounded-[20px] p-4 mt-15 mb-12 m-5 '>
                <button onClick={Calculate} 
                className='bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] text-center text-[25px] mr-2 mb-10 hover:border-white border-2 ml-2 mt-5 border-cyan-400 rounded-[10px] cursor-pointer p-4 w-[210px] shadow-[0_0_20px_black] hover:scale-[1.1] transition-transform duration-400'> 
                Calculate
                </button>
            
                <button onClick={Reaset}    
                className='bg-[linear-gradient(170deg,rgb(7,20,65)_35%,rgb(7,25,92)_50%)] text-center text-[25px] mr-2 mb-10 hover:border-white border-2 ml-2 mt-5 border-cyan-400 rounded-[10px] cursor-pointer p-4 w-[210px] shadow-[0_0_20px_black] hover:scale-[1.1] transition-transform duration-400'>
                Reseat
                </button> 
            </div>   
            </div>

        </div>
    </div>  
  
    </>
)
}
