import React from 'react'

const Login = () => {
  return (
    <>
    <div class="fundologin">
    <div class="container d-flex justify-content-center align-items-center " styles="min-height: 100vh;">
        <div class="card login">
            <span class="text-center text-danger" display-4>@TempData["Mensagem"]</span>
            <div class="card-body" styles="width: 30rem;">  
                <h1 class="card-title luckiest"> Login</h1>

                <form asp-action="Login">
                    <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                    <div class="form-group fs-5">
                        <label asp-for="Email" class="control-label"></label>
                        <input asp-for="Email" class="form-control" />
                        <span asp-validation-for="Email" class="text-danger"></span>
                    </div>
                    <div class="form-group fs-5">
                        <label asp-for="Senha" class="control-label"></label>
                        <input asp-for="Senha" class="form-control" />
                        <span asp-validation-for="Senha" class="text-danger"></span>
                    </div>
                    <div class="mt-3 fs-5">
                        <a asp-area="" asp-controller="Usuarios" asp-action="ForgotPassword">Recuperar Senha</a>
                    </div>
                    <div class="form-group mt-3">
                        <input type="submit" value="Entrar" class="btn btn-primary fs-5" />
                        <input type="button" value="Cancelar" class="btn btn-danger fs-5" />
                    </div>

                    <div class="mt-3 fs-5">
                        <a asp-area="" asp-controller="Usuarios" asp-action="Create">Cadastrar</a>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Login