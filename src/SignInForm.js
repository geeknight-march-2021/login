
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import './SignInForm.scss';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import PrivacyPolicy from "./PrivacyPolicy";




const FormContainer = styled.div`
    max-width: 400px;
    margin: 2rem auto;
    padding: 10px;
`;
const FormActions = styled.div`
    margin: 1.5rem 0;
`;
export default function SignInForm() {
    return (
        <FormContainer>
            <Card>
                <CardContent>
                <form>
                    <TextField margin="normal" fullWidth type="email" label="Email" size="large" />
                    <TextField margin="normal" fullWidth type="password" label="Password" size="large" helperText="8-15 characters" />

                    <FormActions>
                        <Button fullWidth variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </FormActions>
                    <PrivacyPolicy />

                </form>
                </CardContent>
            </Card>
        </FormContainer>
    );
}