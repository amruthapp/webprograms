body{
    font-size: 20px;
    font-family: monospace;
}

#container{
    margin : 20px auto;
    background-color: white;
    height: 300px;
    width : 700px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px;
    position: relative;
}
#start{
    font-size: 1.5em;
    font-weight: bolder;
    word-break: break-all;
    width:100px;
    height:150px;
    border : 2px solid lightgrey;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left:300px;
    top:50px;
    color : lightgrey;
}
#start:hover{
    border: 3px solid lightseagreen;
    color : lightseagreen;
}

#qImg{
    width : 200px;
    height : 200px;
    position: absolute;
    left : 0px;
    top : 0px;
}
#qImg img{
    width : 200px;
    height : 200px;
    border-top-left-radius: 5px;
}

#question{
    width:500px;
    height : 125px;
    position: absolute;
    right:0;
    top:0;
}
#question p{
    margin : 0;
    padding : 15px;
    font-size: 1.25em;
}

#choices{
    width : 480px;
    position: absolute;
    right : 0;
    top : 125px;
    padding : 10px
}
.choice{
    display: inline-block;
    width : 135px;
    text-align: center;
    border : 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
    padding : 5px;
}
.choice:hover{
    border : 2px solid grey;
    font-weight: bold;
}

#timer{
    position: absolute;
    height : 100px;
    width : 200px;
    bottom : 0px;
    text-align: center;
}
#counter{
    font-size: 3em;
}
#btimeGauge{
    width : 150px;
    height : 10px;
    border-radius: 10px;
    background-color: lightgray;
    margin-left : 25px;
}
#timeGauge{
    height : 10px;
    border-radius: 10px;
    background-color: mediumseagreen;
    margin-top : -10px;
    margin-left : 25px;
}
#progress{
    width : 500px;
    position: absolute;
    bottom : 0px;
    right : 0px;
    padding:5px;
    text-align: right;
}
.prog{
    width : 25px;
    height : 25px;
    border: 1px solid #000;
    display: inline-block;
    border-radius: 50%;
    margin-left : 5px;
    margin-right : 5px;
}
#scoreContainer{
    margin : 20px auto;
    background-color: white;
    opacity: 0.8;
    height: 300px;
    width : 700px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px;
    position: relative;
    display: none;
}
#scoreContainer img{
    position: absolute;
    top:100px;
    left:325px;
}
#scoreContainer p{
    position: absolute;
    display: block;
    width : 59px;
    height :59px;
    top:130px;
    left:325px;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}
