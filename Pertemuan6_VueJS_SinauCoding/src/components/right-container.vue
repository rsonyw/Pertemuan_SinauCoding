<template>
    <div class="right-container">
        <div class="content">
            <div class="header">
                <img
                    src="../../src/assets/Logo-Twitter.svg"
                    alt="Twitter logo"
                    class="twitter-logo"
                />
                <div class="sign-up">
                    Don't have an account?<a
                        href="#"
                        target="_self"
                        rel="noopener noreferrer"
                        class="signup"
                    >
                        Sign up</a
                    >
                </div>
            </div>
            <form
                action="#"
                class="form-login"
                target="_self"
                method="post"
                enctype="multipart/form-data"
            >
                <h1>Log in to Twitter</h1>
                <p class="enter">Enter Twitter Account</p>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Phone, email or username"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
                <div class="forgot-password">
                    <a
                        href="#"
                        target="_self"
                        class="forgot-password"
                        rel="noopener noreferrer"
                        >Forgot password ?</a
                    >
                </div>
                <button type="submit" class="btn-signin">Sign In</button>
                <p class="divider">or</p>
                <div class="social-login">
                    <button type="button" class="google">
                        <img
                            src="../../src/assets/Logo-Google.svg"
                            alt="Google Logo"
                        />Sign in with Google
                    </button>
                    <button type="button" class="apple">
                        <img
                            src="../../src/assets/Logo-Apple.svg"
                            alt="Apple Logo"
                        />Sign in with Apple
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.right-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 100px;
    background-color: #ffffff;
}

.content {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-weight: 800;
    font-size: 32px;
    margin: 40px 0;
}

.signup {
    font-weight: 700;
    color: #1e9cf1;
    text-decoration: none;
}

a {
    text-decoration: none;
}

.enter {
    margin-bottom: 10px;
    font-size: larger;
    font-weight: 600;
    color: #757575;
}

input {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 20px 20px;
    box-sizing: border-box;
    font: inherit;
    background-color: #eeeeee;
    border: none;
    border-radius: 4px;
}

.forgot-password {
    text-align: right;
    margin-bottom: 12px;
    color: black;
}

.btn-signin {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 20px 20px;
    box-sizing: border-box;
    font: inherit;
    background-color: #1e9cf1;
    border: none;
    border-radius: 4px;
    color: #ffffff;
}

.divider {
    text-align: center;
    margin: 40px 0;
}

.social-login {
    display: flex;
    gap: 5px;
}

.google,
.apple {
    display: flex;
    justify-content: center;
    gap: 5px;
    font-weight: 600;
    align-items: center;
}

.apple {
    background-color: #191d23;
    color: #ffffff;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font: inherit;
    cursor: pointer;
}
</style>