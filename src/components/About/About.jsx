import './About.scss';
import profile from '../../assets/profile.png'
import { Book, Calendar2EventFill, Mailbox2, MapFill, PersonArmsUp, PhoneFill } from 'react-bootstrap-icons';

function About() {
    return (
        <>
            <div className='about__container'>
                <h1>박혜성 웹 개발자 포트폴리오</h1>
                <div className='about__content'>
                    <p>안녕하세요, 백엔드 개발자를 지망하고</p>
                    <p>풀스택 개발자의 시각을 지향하는 <b>박혜성</b>입니다.</p>
                </div>
            </div>
            <div className='profile__container'>
                <h1>About</h1>
                <div className='profile__content'>
                    <img src={profile} />
                    <div>
                        <div className='profile__item'>
                            <div className='profile__item__box'>
                                <PersonArmsUp size={40} />
                                <div>
                                    <h3>이름</h3>
                                    <p>박혜성</p>
                                </div>
                            </div>
                            <div className='profile__item__box'>
                                <Calendar2EventFill size={40} />
                                <div>
                                    <h3>생년월일</h3>
                                    <p>1996.01.27.</p>
                                </div>
                            </div>
                            <div className='profile__item__box'>
                                <MapFill size={40} />
                                <div>
                                    <h3>주소지</h3>
                                    <p>서울특별시 광진구</p>
                                </div>
                            </div>
                        </div>
                        <div className='profile__item'>
                            <div className='profile__item__box'>
                                <PhoneFill size={40} />
                                <div>
                                    <h3>연락처</h3>
                                    <p>010-7705-2667</p>
                                </div>
                            </div>
                            <div className='profile__item__box'>
                                <Mailbox2 size={40} />
                                <div>
                                    <h3>이메일</h3>
                                    <p>comet2667@naver.com</p>
                                </div>
                            </div>
                            <div className='profile__item__box'>
                                <Book size={40} />
                                <div>
                                    <h3>학력</h3>
                                    <p>원광대학교 체육교육과 졸업</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;