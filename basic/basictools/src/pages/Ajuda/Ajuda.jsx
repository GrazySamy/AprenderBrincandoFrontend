import React from 'react'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'
import styles from './Ajuda.module.css'
import './Ajuda.module.css'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Ajuda = () => {
    return (
        <>
            <FaixaTitulo colorClass="faixa-ajuda" titulo="" subtitulo="Ajuda" />

            <div className="help">
                <h1 className={styles.h1}>Perguntas Frequentes</h1>

                <MDBAccordion initialActive={0}>
                    <MDBAccordionItem collapseId={1} headerTitle='O que é o Aprender Brincando?'>
                        Aprender Brincando é uma plataforma educacional infantil elaborada para promover o desenvolvimento integral das crianças enquanto fortalece os laços familiares.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle='Qual o objetivo do Aprender Brincando?'>
                        Nosso objetivo é oferecer uma maneira saudável e significativa de promover o crescimento das crianças e aumentar o tempo de qualidade entre pais e filhos.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle='Como faço para me cadastrar?'>
                        Por enquanto não temos uma página com formulário de cadastro, o usuário é cadastrado através da adição de usuários na autenticação do Firebase.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={4} headerTitle='Esqueci minha senha, o que faço?'>
                        No momento não temos recuperação de senha.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={5} headerTitle='Como entro em contato com o suporte do site?'>
                        Abra o menu e abra a página "Contato". No momento nosso formulário não está em funcionamento, mas você pode enviar um email para <strong>aprenderbrincandoprojeto@gmail.com</strong>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={6} headerTitle='Aprender Brincando quer me ensinar a cuidar dos meus filhos?'>
                        Não. Nós queremos mostrar que não há uma única maneira de cuidar das crianças, e que mães e pais estão em constante fase de crescimento junto com seus filhos.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={7} headerTitle='Como desfaço meu cadastro?'>
                        No momento apenas temos a opção de exclusão pelo próprio Firebase.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={8} headerTitle='Meus dados estão protegidos?'>
                    Sim, nosso site é 100% seguro, mas lembre-se: nunca compartilhe a sua senha ou qualquer outra informação que possa dar a outra pessoa o acesso aos seus dados.
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>
        </>
    )
}

export default Ajuda