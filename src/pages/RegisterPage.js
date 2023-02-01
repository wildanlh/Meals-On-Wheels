import FormRegister from "../components/forms/FormRegister";
import Layout from "../components/layout/Layout";
import TestFileUpload from "../components/testFileUpload"

const LoginPage = () => {
    return (
        <Layout>
            <FormRegister />
            {/* <TestFileUpload/> */}
        </Layout>
    );
}

export default LoginPage;