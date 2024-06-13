import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.scss';

import indie1 from '../../assets/project/indiean/indie_1.png';
import indie2 from '../../assets/project/indiean/indie_2.png';
import indie3 from '../../assets/project/indiean/indie_3.png';
import indie4 from '../../assets/project/indiean/indie_4.png';

import zip1 from '../../assets/project/zipplanet/zip_1.gif';
import zip2 from '../../assets/project/zipplanet/zip_2.gif';
import zip3 from '../../assets/project/zipplanet/zip_3.gif';

import omok1 from '../../assets/project/omok/omok_1.png';
import omok2 from '../../assets/project/omok/omok_2.png';
import omok3 from '../../assets/project/omok/omok_3.png';

import { BookFill, BracesAsterisk, CheckCircleFill, CheckLg, CodeSlash, Github, Link45deg, RocketTakeoffFill } from 'react-bootstrap-icons';

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
                <h3>5인 개발 | 2024.04. ~ 2024.06.(~)</h3>
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

            <div className='projects__box'>
                <h2>집플래닛</h2>
                <h3>2인 개발 | 2024.02. ~ 2024.03.</h3>
                <div className='projects__slide'>
                    <Slider {...settings}>
                        <img src={zip2} />
                        <img src={zip1} />
                        <img src={zip3} />
                    </Slider>
                </div>
                <div className='projects__content'>
                    <div className='projects__left'>
                        <b>서울권 부동산 전·월세 매물에 대한 임차인들의 실 사용 후기를<br /> 공유하기 위한 웹사이트입니다.</b><br /><br />
                        부동산 중개 플랫폼의 대표적인 사용자 불만으론 허위매물, 사진왜곡,<br /> 금액조작 등이 있습니다.<br /><br />
                        매물에 대한 정보는 임대인, 중개인으로부터 제공되는 경우가<br /> 대부분이기 때문에 임차인의 실 사용 후기를 제공하여 정보 불균형을<br /> 해소해보고자 기획하였습니다.<br /><br />
                        Spring과 React에 대한 이해가 전무한 상태로 시작하였습니다.<br />
                        동시에 프로젝트 인원 5명 중 3명이 포기하여 2명만 남게되는 사소한 문제가 발생하긴 하였지만, 당시 기준으로 많은 파트를 배정 받게 되어<br />
                        오히려 개인의 학습에는 큰 도움이 되었습니다.<br /><br />
                        프론트엔드 개발 경력자이자 당시 팀장이었던 학우분께 많은 도움을<br /> 받았으며, 소규모 프로젝트인만큼 유효성 검사나 편의성 기능 같은<br/> 디테일에 공을 들여
                        완성한 프로젝트 입니다.
                    </div>
                    <div className='projects__line'></div>
                    <div className='projects__right'>
                        <table>
                            <tr>
                                <th><Github/>GitHub</th>
                                <td><a href="https://github.com/comet2667/zipplanet-frontend">Frontend</a> | <a href="https://github.com/comet2667/zipplanet-backend">Backend</a></td>
                            </tr>
                            <tr>
                                <th><BookFill/>Notion</th>
                                <td><a href="https://fifth-value-a2f.notion.site/d6a79d46b2f24d8cbe7fc137fcaeca35">프로젝트 노션 방문</a></td>
                            </tr>
                            <tr>
                                <th><CodeSlash/>Frontend</th>
                                <td>React, Vite, Sass, Axios, Recoil</td>
                            </tr>
                            <tr>
                                <th><BracesAsterisk/>Backend</th>
                                <td>SpringBoot, Mybatis, Lombok, Oracle</td>
                            </tr>
                            <tr>
                                <th><RocketTakeoffFill/>Deployment</th>
                                <td>X</td>
                            </tr>
                            <tr>
                                <th><CheckLg/>담당 역할</th>
                                <td>- 로그인 페이지 작업<br/>
                                    - 회원가입 페이지 작업<br/>
                                    - 마이페이지 작업<br/>
                                    - 계정 찾기 페이지 작업<br/>
                                    - 이메일 인증 구현<br/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className='projects__box'>
                <h2>오목</h2>
                <h3>1인 개발 | 2024.01.</h3>
                <div className='projects__slide'>
                    <Slider {...settings}>
                        <img src={omok1} />
                        <img src={omok2} />
                        <img src={omok3} />
                    </Slider>
                </div>
                <div className='projects__content'>
                    <div className='projects__left'>
                        <b>X, Y 좌표값을 숫자로 입력하여 오목을 둘 수 있는 프로그램입니다.</b><br /><br />
                        Java 학습 1개월차에 진행한 순수 Java로만 개발한 프로젝트입니다.<br />
                        삼삼을 제외한 기본 오목룰이 적용되어 있고 socket을 적용하여<br /> 로컬환경에서 멀티 플레이가 가능합니다.<br /><br />
                        보드게임 중에서 상대적으로 간단하다고 생각하여 시작하였지만 오목판 구현부터 승리조건 검증까지 당시 수준 대비 복잡한 알고리즘이<br /> 필요하였습니다.<br /><br />
                        예를들어 승리조건을 검증하기 위해선 가로줄 검증, 세로줄 검증,<br /> 좌·우 대각선 검증, 우·좌 대각선 검증이 필요합니다. <br /><br />
                        코드는 단순히 2차원 배열, if문, for문으로만 작성하였지만 해당<br /> 프로젝트를 통해 Java 문법과 더욱 친숙해질 수 있었습니다.
                    </div>
                    <div className='projects__line'></div>
                    <div className='projects__right'>
                        <table>
                            <tr>
                                <th><Github/>GitHub</th>
                                <td><a href="https://github.com/comet2667/JavaFreeProject">Source Code</a></td>
                            </tr>
                            <tr>
                                <th><BracesAsterisk/>Backend</th>
                                <td>Java, Oracle</td>
                            </tr>
                            <tr>
                                <th><CheckLg/>주요 기능</th>
                                <td>- server → client간 멀티플레이<br/>
                                    - 싱글 플레이<br/>
                                    - 전체 대국 기록 저장 및 조회(JDBC)<br/>
                                    - 직전 기보 조회<br/>
                                    - 매 턴 승자 검증 및 중복착수 검증
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