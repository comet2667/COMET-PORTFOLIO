import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.scss';

import indie1 from '../../assets/project/indiean/indie_1.png';
import indie2 from '../../assets/project/indiean/indie_2.png';
import indie3 from '../../assets/project/indiean/indie_3.png';
import indie4 from '../../assets/project/indiean/indie_4.png';
import { BracesAsterisk, CheckCircleFill, CheckLg, CodeSlash, Github, Link45deg, RocketTakeoffFill } from 'react-bootstrap-icons';

function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='projects__container'>
            <h1>Projects</h1>
            <div className='projects__box'>
                <h2>Indie:안</h2>
                <div className='projects__slide'>
                    <Slider {...settings}>
                        <img src={indie1} />
                        <img src={indie2} />
                        <img src={indie3} />
                        <img src={indie4} />
                    </Slider>
                </div>
                <div className='projects__content'>
                    <div className='projects__left'>
                        <b>마케팅 비용을 충당하기 어려운 소자본/무자본 아티스트들의 크라우드 펀딩을 위한 웹사이트 입니다.</b><br /><br />
                        매체에 노출되지 못하는 실력있는 아티스트들과 해당 아티스트들의<br /> 공연, 앨범을 원하는 팬 및 리스너들의 이해관계를 충족시켜보고자<br /> 기획하였습니다.<br /><br />
                        개발환경 구축부터 배포까지, 개발 전체 과정을 직접 관리해볼 수 있는 좋은 경험이었습니다.<br /><br />
                        팀장으로서 JPA와 같은 새로운 기술을 도입한 것은 좋았으나<br />
                        팀원들에게 해당 기술을 사용하는 이유와 발생할 수 있는 문제점에 대해 제대로 전달하지 못하여 개발이 지연되고
                        코드 작성 패턴이 통일되지<br /> 못한 부분은 아쉬웠습니다.<br /><br />
                        해당 프로젝트는 학습을 위한 프로젝트인만큼 현재까지도 오류수정 및 리팩토링을 진행하고 있습니다.
                    </div>
                    <div className='projects__line'></div>
                    <div className='projects__right'>
                        <table>
                            <tr>
                                <th><Github/>GitHub</th>
                                <td><a href="https://github.com/indiean-project/IA-FE">Frontend</a> | <a href="https://github.com/indiean-project/IA-BE">Backend</a></td>
                            </tr>
                            <tr>
                                <th><Link45deg/>URL</th>
                                <td><a href="http://3.38.89.54:8080/">http://3.38.89.54:8080/</a></td>
                            </tr>
                            <tr>
                                <th><CodeSlash/>Frontend</th>
                                <td>React, Vite, Sass, Axios, Recoil</td>
                            </tr>
                            <tr>
                                <th><BracesAsterisk/>Backend</th>
                                <td>SpringBoot, JPA, Lombok, PostgreSQL</td>
                            </tr>
                            <tr>
                                <th><RocketTakeoffFill/>Deployment</th>
                                <td>AWS EC2</td>
                            </tr>
                            <tr>
                                <th><CheckLg/>담당 역할</th>
                                <td>- 전체 레이아웃 기본 디자인 및 구현<br/>
                                    - Frontend, Backend 개발 환경 구축<br/>
                                    - github 형상관리<br/>
                                    - 메인 페이지 작업<br/>
                                    - 펀딩 리스트, 상세, 작성 페이지 작업
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;