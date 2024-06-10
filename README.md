# AprenderBrincandoFrontend
Repositório para desenvolvimento do software AprendendoABrincar, para o cumprimento do Projeto Transdisciplinar do curso Desenvolvimento de Software Multiplataforma, na faculdade Fatec Matão - Luiz Marchesan.

# Tarefas de Melhorias como Avaliação [11/06/2024] 
(As Sugestões de Códigos São Geradas para guiar exemplos não são implementações prontas. As utilize como guias de introdução)

1. **Ajuste Visual de Botões (3 pontos)**
   - **Descrição:** Modificar o estilo dos botões para melhorar a aparência e a experiência do usuário.
   - **Exemplo de Código:**
     ```css
     .btn-custom {
       background-color: #4CAF50;
       color: white;
       border-radius: 5px;
       padding: 10px 20px;
     }
     ```

2. **Melhoria na Responsividade do Layout (5 pontos)**
   - **Descrição:** Ajustar o layout para melhor responsividade em dispositivos móveis.
   - **Exemplo de Código:**
     ```css
     @media (max-width: 768px) {
       .container {
         padding: 15px;
       }
     }
     ```

3. **Atualização do Componente de Cabeçalho (8 pontos)**
   - **Descrição:** Melhorar o design e a funcionalidade do cabeçalho, adicionando ícones de navegação.
   - **Exemplo de Código:**
     ```jsx
     const Header = () => (
       <header className="header">
         <nav>
           <ul>
             <li><a href="/home"><i className="fa fa-home"></i> Home</a></li>
             <li><a href="/profile"><i className="fa fa-user"></i> Profile</a></li>
           </ul>
         </nav>
       </header>
     );
     ```

4. **Integração com o Firebase Authentication (13 pontos)**
   - **Descrição:** Implementar a autenticação de usuários usando Firebase.
   - **Exemplo de Código:**
     ```js
     import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

     const auth = getAuth();
     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         const user = userCredential.user;
         console.log("User signed in:", user);
       })
       .catch((error) => {
         console.error("Error signing in:", error);
       });
     ```

5. **Adição de Clains de Usuário no Firebase (21 pontos)**
   - **Descrição:** Adicionar clains personalizados aos usuários no Firebase Authentication.
   - **Exemplo de Código:**
     ```js
     import { getAuth } from "firebase/auth";
     import { getFirestore, doc, setDoc } from "firebase/firestore";

     const auth = getAuth();
     const db = getFirestore();

     const addUserClaims = async (userId, claims) => {
       await setDoc(doc(db, "userClaims", userId), claims);
       console.log("User claims added:", claims);
     };

     addUserClaims("userId123", { admin: true });
     ```

6. **Configuração do Ambiente de Bootstrap pelo npm (34 pontos)**
   - **Descrição:** Configurar o projeto para usar Bootstrap via npm para gerenciamento de estilos.
   - **Exemplo de Código:**
     ```bash
     npm install bootstrap
     ```
     ```jsx
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

7. **Uso de Firebase-Tools para Deploy (55 pontos)**
   - **Descrição:** Configurar o uso de Firebase-Tools para automação do deploy do projeto.
   - **Exemplo de Código:**
     ```bash
     npm install -g firebase-tools
     firebase login
     firebase init
     firebase deploy
     ```

8. **Implementação de Testes Unitários (21 pontos)**
   - **Descrição:** Desenvolver testes unitários para os principais componentes do projeto.
   - **Exemplo de Código:**
     ```jsx
     import { render, screen } from '@testing-library/react';
     import Header from './Header';

     test('renders header component', () => {
       render(<Header />);
       const linkElement = screen.getByText(/Home/i);
       expect(linkElement).toBeInTheDocument();
     });
     ```

9. **Criação de Dashboard de Administração (55 pontos)**
   - **Descrição:** Implementar um dashboard para administração do conteúdo e gerenciamento de usuários.
   - **Exemplo de Código:**
     ```jsx
     const AdminDashboard = () => (
       <div className="dashboard">
         <h2>Admin Dashboard</h2>
         <div className="stats">
           <div>Total Users: 100</div>
           <div>Active Sessions: 5</div>
         </div>
       </div>
     );
     ```

10. **Automação de Deploy com GitHub Actions (34 pontos)**
    - **Descrição:** Configurar GitHub Actions para automação do processo de deploy.
    - **Exemplo de Código:**
      ```yaml
      name: Deploy to Firebase

      on:
        push:
          branches:
            - main

      jobs:
        build:
          runs-on: ubuntu-latest

          steps:
            - name: Checkout repository
              uses: actions/checkout@v2

            - name: Install dependencies
              run: npm install

            - name: Build project
              run: npm run build

            - name: Deploy to Firebase
              uses: w9jds/firebase-action@v1
              with:
                args: deploy
              env:
                FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
      ```

11. **Adição de Animações em Componentes (3 pontos)**
    - **Descrição:** Adicionar animações de entrada e saída nos componentes principais.
    - **Exemplo de Código:**
      ```css
      .fade-in {
        animation: fadeIn 2s ease-in;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      ```

12. **Refatoração do Componente de Rodapé (5 pontos)**
    - **Descrição:** Melhorar o design e a acessibilidade do rodapé.
    - **Exemplo de Código:**
      ```jsx
      const Footer = () => (
        <footer className="footer">
          <p>&copy; 2024 Aprender Brincando. Todos os direitos reservados.</p>
        </footer>
      );
      ```

13. **Implementação de Dark Mode (8 pontos)**
    - **Descrição:** Adicionar suporte para modo escuro em toda a aplicação.
    - **Exemplo de Código:**
      ```css
      body.dark-mode {
        background-color: #121212;
        color: #ffffff;
      }
      ```

14. **Integração com Firestore Database (13 pontos)**
    - **Descrição:** Configurar e integrar o Firestore Database para armazenamento de dados.
    - **Exemplo de Código:**
      ```js
      import { getFirestore, collection, addDoc } from "firebase/firestore";

      const db = getFirestore();
      const addData = async () => {
        try {
          await addDoc(collection(db, "users"), {
            name: "John Doe",
            email: "john@example.com"
          });
          console.log("Document successfully written!");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
      ```

15. **Criação de Perfil de Usuário (21 pontos)**
    - **Descrição:** Desenvolver a página de perfil de usuário com informações e histórico.
    - **Exemplo de Código:**
      ```jsx
      const UserProfile = ({ user }) => (
        <div className="profile">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Member since: {user.joined}</p>
        </div>
      );
      ```

16. **Configuração de Bootstrap via CDN (34 pontos)**
    - **Descrição:** Configurar o projeto para usar Bootstrap via CDN para facilitar o desenvolvimento.
    - **Exemplo de Código:**
      ```html
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
      ```

17. **Automatização de Testes de Integração (55 pontos)**
    - **Descrição:** Desenvolver testes de integração automatizados para garantir a qualidade do software.
    - **Exemplo de Código:**
      ```jsx
      import { render, screen } from '@testing-library/react';
      import userEvent from '@testing-library/user-event';
      import App from './App';

      test('user can login', async () => {
        render(<App />);
        userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
        userEvent.type(screen.getByLabelText(/password/i), 'password123');
        userEvent.click(screen.getByText(/login/i));

        const welcomeMessage = await screen.findByText(/welcome, john/i);
        expect(welcomeMessage).toBeInTheDocument();
      });
      ```

18. **Implementação de Notificações em Tempo Real (21 pontos)**
    - **Descrição:** Adicionar suporte a notificações em tempo real usando Firebase.
    - **Exemplo de Código:**
      ```js
      import { getMessaging, onMessage } from "firebase/messaging";

      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // Custom code to display notification
      });
      ```

19. **Otimização de Performance (34 pontos)**
    - **Descrição:** Melhorar a performance da aplicação através da otimização de código e lazy loading.
    - **Exemplo de Código:**
      ```jsx
      const Home = React.lazy(() => import('./Home'));

      const App = () => (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      );
      ```

20. **Configuração de CI/CD com GitHub Actions (55 pontos)**
    - **Descrição:** Configurar integração contínua e entrega contínua (CI/CD) usando GitHub Actions.
    - **Exemplo de Código:**
      ```yaml
      name: CI/CD Pipeline

      on:
        push:
          branches:
            - main

      jobs:
        build-and-deploy:
          runs-on: ubuntu-latest

          steps:
            - name: Checkout repository
              uses: actions/checkout@v2

            - name: Install dependencies
              run: npm install

            - name: Run tests
              run: npm test

            - name: Build project
              run: npm run build

            - name: Deploy to Firebase
              uses: w9jds/firebase-action@v1
              with:
                args: deploy
              env:
                FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
      ```
      
21. **Melhoria de Acessibilidade (3 pontos)**
    - **Descrição:** Implementar melhorias de acessibilidade, como adicionar descrições alternativas a imagens.
    - **Exemplo de Código:**
      ```jsx
      <img src="example.jpg" alt="Descrição alternativa da imagem" />
      ```

22. **Refatoração de Formulários (5 pontos)**
    - **Descrição:** Melhorar a usabilidade dos formulários com validação visual.
    - **Exemplo de Código:**
      ```jsx
      const Form = () => (
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
            <div className="invalid-feedback">Por favor, insira um email válido.</div>
          </div>
        </form>
      );
      ```

23. **Melhoria no Carregamento de Imagens (8 pontos)**
    - **Descrição:** Implementar lazy loading para melhorar a performance do carregamento de imagens.
    - **Exemplo de Código:**
      ```jsx
      <img src="example.jpg" loading="lazy" alt="Descrição da imagem" />
      ```

24. **Configuração do Firebase Hosting (13 pontos)**
    - **Descrição:** Configurar o Firebase Hosting para servir a aplicação.
    - **Exemplo de Código:**
      ```json
      // firebase.json
      {
        "hosting": {
          "public": "public",
          "ignore": [
            "firebase.json",
            "**/.*",
            "**/node_modules/**"
          ],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
      ```

25. **Criação de Página de Ajuda (21 pontos)**
    - **Descrição:** Desenvolver uma página de ajuda com FAQs e guias para os usuários.
    - **Exemplo de Código:**
      ```jsx
      const Help = () => (
        <div className="help">
          <h2>Ajuda</h2>
          <h3>Perguntas Frequentes</h3>
          <ul>
            <li>Como faço para me cadastrar?</li>
            <li>Esqueci minha senha, o que faço?</li>
          </ul>
        </div>
      );
      ```

26. **Implementação de Logs de Erro (34 pontos)**
    - **Descrição:** Adicionar registro de logs de erro para monitoramento e debugging.
    - **Exemplo de Código:**
      ```js
      window.onerror = function(message, source, lineno, colno, error) {
        console.error('Error message: ', message);
        console.error('Source: ', source);
        console.error('Line: ', lineno, 'Column: ', colno);
        console.error('Error object: ', error);
      };
      ```

27. **Desenvolvimento de Testes End-to-End (55 pontos)**
    - **Descrição:** Implementar testes end-to-end utilizando Cypress.
    - **Exemplo de Código:**
      ```js
      // cypress/integration/sample_spec.js
      describe('My First Test', () => {
        it('Visits the Kitchen Sink', () => {
          cy.visit('https://example.cypress.io');
          cy.contains('type').click();
          cy.url().should('include', '/commands/actions');
        });
      });
      ```

28. **Implementação de Autenticação Social (21 pontos)**
    - **Descrição:** Adicionar suporte para login social com Google e Facebook.
    - **Exemplo de Código:**
      ```js
      import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log('User signed in: ', user);
        }).catch((error) => {
          console.error('Error during sign-in: ', error);
        });
      ```

29. **Criação de Dashboard de Relatórios (34 pontos)**
    - **Descrição:** Desenvolver um dashboard para visualização de relatórios de uso.
    - **Exemplo de Código:**
      ```jsx
      const ReportsDashboard = () => (
        <div className="dashboard">
          <h2>Relatórios</h2>
          <div className="report">
            <h3>Usuários Ativos</h3>
            <p>100</p>
          </div>
          <div className="report">
            <h3>Novos Cadastros</h3>
            <p>50</p>
          </div>
        </div>
      );
      ```

30. **Melhoria na Segurança de Dados (55 pontos)**
    - **Descrição:** Implementar melhorias na segurança de dados, incluindo criptografia de dados sensíveis.
    - **Exemplo de Código:**
      ```js
      import crypto from 'crypto';

      const algorithm = 'aes-256-ctr';
      const secretKey = process.env.SECRET_KEY;

      const encrypt = (text) => {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        return {
          iv: iv.toString('hex'),
          content: encrypted.toString('hex')
        };
      };

      const decrypt = (hash) => {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), Buffer.from(hash.iv, 'hex'));
        const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

        return decrypted.toString();
      };

      const encryptedData = encrypt('mySensitiveData');
      const decryptedData = decrypt(encryptedData);
      console.log('Decrypted Data: ', decryptedData);
      ```


31. **Melhoria na Barra de Navegação (3 pontos)**
    - **Descrição:** Atualizar a barra de navegação para incluir ícones e melhorar a usabilidade.
    - **Exemplo de Código:**
      ```jsx
      const Navbar = () => (
        <nav className="navbar">
          <ul>
            <li><a href="/"><i className="fa fa-home"></i> Home</a></li>
            <li><a href="/about"><i className="fa fa-info"></i> About</a></li>
          </ul>
        </nav>
      );
      ```

32. **Melhoria na Exibição de Listas (5 pontos)**
    - **Descrição:** Adicionar estilos para melhorar a exibição de listas.
    - **Exemplo de Código:**
      ```css
      .list-item {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      .list-item:hover {
        background-color: #f0f0f0;
      }
      ```

33. **Adição de Tooltips (8 pontos)**
    - **Descrição:** Implementar tooltips para botões e ícones para melhorar a experiência do usuário.
    - **Exemplo de Código:**
      ```jsx
      import { Tooltip } from 'react-tooltip';

      const IconWithTooltip = () => (
        <div>
          <i className="fa fa-info-circle" data-tip="Informação útil"></i>
          <Tooltip place="top" type="dark" effect="solid"/>
        </div>
      );
      ```

34. **Integração com Cloud Storage do Firebase (13 pontos)**
    - **Descrição:** Configurar e integrar o Cloud Storage do Firebase para upload de arquivos.
    - **Exemplo de Código:**
      ```js
      import { getStorage, ref, uploadBytes } from "firebase/storage";

      const storage = getStorage();
      const storageRef = ref(storage, 'some-child');

      const file = new Blob(["Hello, world!"], { type: "text/plain" });

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      ```

35. **Criação de Página de Contato (21 pontos)**
    - **Descrição:** Desenvolver uma página de contato com formulário de envio de mensagens.
    - **Exemplo de Código:**
      ```jsx
      const Contact = () => (
        <div className="contact">
          <h2>Contato</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      );
      ```

36. **Adição de Sistema de Comentários (34 pontos)**
    - **Descrição:** Implementar um sistema de comentários para posts ou artigos.
    - **Exemplo de Código:**
      ```jsx
      const Comments = ({ postId }) => {
        const [comments, setComments] = useState([]);

        useEffect(() => {
          // Fetch comments from Firebase
        }, [postId]);

        return (
          <div className="comments">
            <h3>Comentários</h3>
            <ul>
              {comments.map(comment => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>
          </div>
        );
      };
      ```

37. **Desenvolvimento de Testes de Interface (55 pontos)**
    - **Descrição:** Implementar testes de interface para garantir a usabilidade dos componentes principais.
    - **Exemplo de Código:**
      ```jsx
      import { render, screen } from '@testing-library/react';
      import userEvent from '@testing-library/user-event';
      import Navbar from './Navbar';

      test('navigates to home page', () => {
        render(<Navbar />);
        userEvent.click(screen.getByText(/home/i));
        expect(window.location.pathname).toBe('/');
      });
      ```

38. **Implementação de Notificações Push (21 pontos)**
    - **Descrição:** Adicionar suporte para notificações push utilizando Firebase Cloud Messaging.
    - **Exemplo de Código:**
      ```js
      import { getMessaging, getToken, onMessage } from "firebase/messaging";

      const messaging = getMessaging();
      getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY_HERE' }).then((currentToken) => {
        if (currentToken) {
          console.log('Token received:', currentToken);
        } else {
          console.log('No registration token available.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });

      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // Customize notification here
      });
      ```

39. **Otimização de Queries no Firebase (34 pontos)**
    - **Descrição:** Melhorar a performance otimizando as queries no Firebase Firestore.
    - **Exemplo de Código:**
      ```js
      import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

      const db = getFirestore();
      const q = query(collection(db, "users"), where("active", "==", true));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      ```

40. **Implementação de PWA (55 pontos)**
    - **Descrição:** Transformar a aplicação em uma Progressive Web App (PWA) para melhorar a experiência em dispositivos móveis.
    - **Exemplo de Código:**
      ```jsx
      // index.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import App from './App';
      import * as serviceWorkerRegistration from './serviceWorkerRegistration';

      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );

      serviceWorkerRegistration.register();
      ```
