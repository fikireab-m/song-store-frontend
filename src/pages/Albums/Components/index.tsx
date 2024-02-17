import styled from "@emotion/styled"

export const AlbumCard = styled.div`
    min-width:18.5rem;
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
        height: 150px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(156, 80, 255) 100%);
        position: relative;

        &::before{
            content: "";
            position: absolute;
            top: 30px;
            left: 0;
            z-index:2;
            background: rgba(255, 255, 255, 0);
            height: 15px;
            width: 15px;
            border-top-left-radius: 15px;
            box-shadow: -5px -5px 0 2px #ffffff;
        }

    div{
        border-bottom-right-radius: 10px;
        height: 30px;
        width: 130px;
        background: #fff;
        position: relative;
        transform: skew(-40deg);
        box-shadow: -10px -10px 0 0 #fff;

        &::before{
            content: "";
            position: absolute;
            z-index:2;
            width: 15px;
            height: 15px;
            top: 0;
            right: -15px;
            background: rgba(255, 255, 255, 0);
            border-top-left-radius: 10px;
            box-shadow: -5px -5px 0 2px #fff;
        }
        }
    }
    &>div:nth-child(2){
        margin-top: 1rem;
        padding: 0.65rem 0.33rem;
        &>span{
            display: block;
            color:#999;
            font-size: 2rem;
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
                sapn{
                    font-size:1rem;
                }
                &>span:nth-child(1){
                    font-size: 2.5rem;
                    color:#999;
                    font-weight:800;
                    display: block;
                }
            }
            &>div:nth-child(2){
                border-left: 2px solid rgba(0, 0, 0, 0.2);
            }
        }
    }
`;