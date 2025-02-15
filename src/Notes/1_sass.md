1. To this particular project for styling we use the sass.for that 1st we have to install `npm i sass`

2. Default we have the `index.css` file , now Create `index.scss` file. after creating it import this file in `main.jsx`.

3. Now create the break points large , medium , small for different screens.create a one more file and create a sass function using @mixin

@mixin lg{
    @media(max-width : 1126px){
        @content
    }
}

@mixin md{
    @media(max-width : 938px){
        @content
    }
}

@mixin sm{
    @media(max-width : 638px){
        @content
    }
}


@import './responsive.scss' ; 

.layout{
    
    background-color: rgb(196, 196, 238);
    height: 100vh;
    max-width: 1266px;
    margin: 0 auto;
    padding-left: 10px;
    
    @include lg{
        background-color: rgb(235, 180, 159);
    }
    @include md{
        background-color: rgb(207, 228, 176);
    }
    @include sm{
        background-color: rgb(219, 197, 197);
    }
}
