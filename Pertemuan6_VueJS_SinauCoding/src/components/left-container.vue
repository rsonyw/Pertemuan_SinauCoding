<template>
    <div class="left-container">
        <div class="content">
            <h1>Welcome to Twitter</h1>
            <h2>Happening now, join twitter today</h2>
            <img
                src="../../src/assets/Ilustrator.svg"
                alt="Illustrator"
                class="illustrator"
            />
        </div>
        <p class="copyright">&copy; 2022 Twitter, Inc</p>
    </div>
</template>

<style scoped>
.left-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 100px;
    background-color: #1e9cf1;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
}

.content {
    margin-top: 100px;
    color: #ffffff;
}

img {
    width: 400px;
    height: 400px;
}

h1 {
    font-weight: 800;
    font-size: 32px;
    margin: 10px 0;
}

h2 {
    font-weight: 600;
    font-size: larger;
}
</style>