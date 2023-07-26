
const GenerateNewUser = ({
    nickname = "",
    loginMail = "",
    password = "",
    tasks = []
}) => {
    return {
        nickname: nickname,
        loginMail: loginMail,
        password: password,
        tasks: tasks
    }
}

export default GenerateNewUser