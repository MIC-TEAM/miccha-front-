import Header from '../components/common/Header'
import SubmitButton from '../components/common/SubmitButton'
import Head from 'next/head'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { InputBox, SignUpContainer, SignUpWrapper } from '../styles/sign_up'
import CheckeBox from '../components/sign_up/CheckeBox'

const SignUp: React.FC = () => {
  return (
    <>
      <Head>
        <title>믹챠 | 회원가입</title>
      </Head>

      <SignUpContainer>
        <Header link="/sign_in" text="로그인" />
        <SignUpWrapper>
          <h2>회원가입</h2>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().min(2, '너무 짧습니다.').max(20, '너무 깁니다.').required(),
              email: Yup.string().email('이메일을 정확히 입력하세요').min(8, '너무 짧습니다.').required(),
              password: Yup.string().min(10, '너무 짧습니다.').required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputBox>
                  <div className="inputBox name">
                    <Field type="name" placeholder="이름 (2자 이상)" name="name" className="input" />
                    <ErrorMessage name="name" component="div" className="err" />
                  </div>

                  <div className="inputBox email">
                    <Field type="email" name="email" placeholder="이메일 (example@gamil.com)" className="input" />
                    <ErrorMessage name="email" component="div" className="err" />
                  </div>

                  <div className="inputBox password">
                    <Field
                      type="password"
                      name="password"
                      placeholder="영문, 숫자, 특문 중 2개 조합 10자 이상"
                      className="input"
                    />
                    <ErrorMessage name="password" component="div" className="err" />
                  </div>

                  <strong className="duplication">이미 존재하는 이메일입니다.</strong>
                </InputBox>

                <CheckeBox />

                <SubmitButton type="submit" disabled={isSubmitting}>
                  계정 생성하기
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  )
}

export default SignUp