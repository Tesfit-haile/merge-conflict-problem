import React from 'react'

function FileTwo() {

    const funcTwo = () => {
        console.log('funcTwo has added from git .... ')
    }
    
    const handleAddForm = ()=> {
        console.log('hello from handleAddForm...')
    }

    return (
        <>
            <div>FileTwo</div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adip
            </p>
            <p> This is a new change from this file...</p>
            <p> This is a new change from this file...</p>

        </>

    )
}

export default FileTwo
