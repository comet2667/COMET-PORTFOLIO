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

    return (
        <div className="skills__container">
            <h1>Skills</h1>
            <div className='skills__box'>
                <h2>Backend</h2>
                <div className='skills__item'>
                    <img src={javaLogo} />
                    <div className='skills__line'></div>
                    <div>
                        개발 기초 공부부터 프로젝트까지 전부 자바로 진행하였습니다.<br />
                        현재는 최적화 및 클린코드 작성 훈련을 위해 팀 프로젝트 팀원들과 리팩토링을 진행하고 있습니다.
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={springBootLogo} />
                    <div className='skills__line'></div>
                    <div>
                        스프링 학습 이후, 2건의 팀프로젝트와 공공데이터 활용 및 openAPI 학습을 스프링부트로 진행하였습니다.<br />
                        팀장을 맡은 프로젝트에선 ResponseEntity와 CutomException을 활용하여 통일된 형식의 API 응답을 구현해보았습니다.
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={jpaLogo} />
                    <div className='skills__line'></div>
                    <div>
                        학습과 동시에 최근 프로젝트에 적용하였습니다.<br />
                        학습 초기에는 편의성만을 고려하였으나 엔티티의 연관관계 매핑부터 Join 이슈 까지, 사용할 수록 고려해야될 부분이 많았습니다.<br />
                        하지만 배포 과정 중 DB 벤더를 변경하거나 유지보수 면에서 JPA의 장점을 체감할 수 있었습니다.
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={oracleLogo} />
                    </div>
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
                        반응형 까지 고려하지는 못하나 특정 요소를 원하는 위치에 배치하거나 특정 조건에 따라 동작을 제어할 수 있습니다.
                    </div>
                </div>
                <div className='skills__item'>
                    <img src={reactLogo} />
                    <div className='skills__line'></div>
                    <div>
                        2건의 팀 프로젝트 프론트엔드 개발을 React+Vite 기반 환경에서 진행하였습니다.<br />
                        공통으로 사용되는 요소를 컴포넌트로 분리할 수 있고 Axios를 통해 동적 웹을 구현할 수 있습니다.
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={recoilLogo} />
                    </div>
                    <div>
                        <img src={viteLogo} />
                    </div>
                    <div>
                        <img src={axiosLogo} />
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
                        최근 진행한 팀 프로젝트인 '인디안'을 AWS EC2 인스턴스를 통해 배포하였습니다.<br/>
                        기능별 이미지 CRUD는 S3 버킷에 임시 이미지와 저장 이미지를 구분하여 처리하였고 RDS를 통해 PostGreSQL 데이터베이스를 생성하였습니다.<br/>
                    </div>
                </div>
                <div className='skills__etc'>
                    <div>
                        <img src={ec2Logo} />
                    </div>
                    <div>
                        <img src={rdsLogo} />
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
                        팀 프로젝트 전부 github를 통해 진행하였습니다.<br/>
                        팀장 역할을 맡아 팀원들의 Pull Request를 리뷰하고 main branch를 관리한 경험이 있습니다.
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
                        <img src={flowLogo} />
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