import './Skills.scss';
import javaLogo from '../../assets/logo/java_logo.png';
import jpaLogo from '../../assets/logo/jpa_logo.png';
import oracleLogo from '../../assets/logo/oracle_logo.png';
import springBootLogo from '../../assets/logo/springBoot_logo.png';
import lombokLogo from '../../assets/logo/lombok_logo.png';
import psqlLogo from '../../assets/logo/psql_logo.png';
import mybatisLogo from '../../assets/logo/mybatis_logo.png';

import htmlLogo from '../../assets/logo/html_logo.png';
import reactLogo from '../../assets/logo/react_logo.png';
import recoilLogo from '../../assets/logo/recoil_logo.png';
import viteLogo from '../../assets/logo/vite_logo.png';
import axiosLogo from '../../assets/logo/axios_logo.png';
import sassLogo from '../../assets/logo/sass_logo.png';

import awsLogo from '../../assets/logo/aws_logo.png';
import ec2Logo from '../../assets/logo/ec2_logo.png';
import s3Logo from '../../assets/logo/s3_logo.png';
import rdsLogo from '../../assets/logo/rds_logo.png';

import gitLogo from '../../assets/logo/github_logo.png';

import sheetLogo from '../../assets/logo/sheet_logo.png';
import notionLogo from '../../assets/logo/notion_logo.png';
import figmaLogo from '../../assets/logo/figma_logo.png';
import flowLogo from '../../assets/logo/flow_logo.png';

function Skills() {
    //Frontend, Backend, Deployment, Version Control, Communication
    //BE = java, springBoot, JPA, Oracle
    return (
        <div className="skills__container">
            <h1>Skills</h1>
            <div className='skills__box'>
                <h2>Backend</h2>
                <div className='skills__item'>
                    <img src={javaLogo} />
                    <div className='skills__line'></div>
                    <div>
                        자바 관련 내용
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={springBootLogo} />
                    <div className='skills__line'></div>
                    <div>
                        스프링부트 관련 내용
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={oracleLogo} />
                    <div className='skills__line'></div>
                    <div>
                        오라클 관련 내용
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={jpaLogo} />
                    <div className='skills__line'></div>
                    <div>
                        JPA 관련 내용
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={psqlLogo} />
                    </div>
                    <div>
                        <img src={mybatisLogo} />
                    </div>
                    <div>
                        <img src={lombokLogo} />
                    </div>
                </div>
            </div>

            <div className='skills__box'>
                <h2>Frontend</h2>
                <div className='skills__item'>
                    <img src={htmlLogo} />
                    <div className='skills__line'></div>
                    <div>
                        html 관련 내용
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={reactLogo} />
                    <div className='skills__line'></div>
                    <div>
                        react 관련 내용
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={recoilLogo} />
                    <div className='skills__line'></div>
                    <div>
                        recoil 관련 내용
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={viteLogo} />
                    </div>
                    <div>
                        <img src={axiosLogo}/>
                    </div>
                    <div>
                        <img src={sassLogo} />
                    </div>
                </div>
            </div>

            <div className='skills__box'>
                <h2>Deployment</h2>
                <div className='skills__item'>
                    <img src={awsLogo} />
                    <div className='skills__line'></div>
                    <div>
                        aws 관련 내용
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={ec2Logo} />
                    </div>
                    <div>
                        <img src={rdsLogo}/>
                    </div>
                    <div>
                        <img src={s3Logo} />
                    </div>
                </div>
            </div>

            <div className='skills__box'>
                <h2>Version Control</h2>
                <div className='skills__item'>
                    <img src={gitLogo} />
                    <div className='skills__line'></div>
                    <div>
                        github 관련 내용
                    </div>
                </div>
            </div>

            <div className='skills__box'>
                <h2>Communication</h2>
                <div className='skills__etc'>
                    <div>
                        <img src={figmaLogo} />
                    </div>
                    <div>
                        <img src={flowLogo}/>
                    </div>
                    <div>
                        <img src={notionLogo} />
                    </div>
                    <div>
                        <img src={sheetLogo} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;