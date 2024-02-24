import styled from "@emotion/styled"

export const ArtistCard = styled.div`
    min-width:18.5rem;
    height:max-content;
    border-radius: 1.5rem;
    background: whitesmoke;
    padding: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 0.58rem 1.3rem 0px rgba(0, 0, 0, 0.2) ;
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.05);
        }
        
    &>div:nth-child(1) {
        position: relative;
        height: 12rem;
        border-radius: 1rem;
        background: url(/assets/artistbg.jpeg);
        background-position:center;
        background-size:auto;
        background-repeat:no-repeat;
        
        &>div{
            position:absolute;
            width:100%;
            top:75%;
            left:0;
            display:flex;
            justify-content:center;

            img{
            width:6rem;
            height:6rem;
            border-radius:50%;
            box-shadow:0.2rem 0.2rem 0.5rem #777;
        }
        }
    }
    &>div:nth-child(2){
        margin-top: 3rem;
        padding: 0.65rem 0.33rem;
        &>span{
            display: block;
            color:#999;
            font-size: 1.5rem;
            font-weight: bolder;
            text-align: center;
            letter-spacing: 2px;
        }
        &>div{
            display: flex;
            justify-content: space-between;
            margin-top: 20px;

            &>div{
                flex: 30%;
                text-align: center;
                padding: 0.3rem;
                span{
                    font-size:1rem;
                }
                &>span:nth-child(1){
                    font-size: 2rem;
                    color:#999;
                    font-weight:800;
                    margin-right:0.25rem;
                }
            }
            &>div:nth-child(2){
                border-left: 2px solid rgba(0, 0, 0, 0.2);
            }
        }
    }
`;