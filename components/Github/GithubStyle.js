import styled from "styled-components";
export const GithubContainer = styled.div`
width: 100%
height: 100%
color: #fff;
padding: 3rem;
.profile-wrapper{
    display: flex;

    color: #fff;
    .profile-image{
        border: 1px solid #fff;
        width: 10%;
        margin-right: 1rem;
    }
    .profile-content{
        width: 90%;
        display: flex;
        flex-direction: column;
        .descriptions{

            h1{
                margin:0;
            }
            p{
                margin: 0;
            }
        }
        .details{
            display: flex;
            p{
                margin-right: 1rem;
                border: 1px solid #fff;
                padding: 0.5rem;
                border-radius: 0.25rem;
                &:last-child{
border: none;
                }
            }
        }
    }
}`;
