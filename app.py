import streamlit as st

# =================================================================
# CONFIGURAÇÕES DE PÁGINA E DESIGN SYSTEM
# =================================================================
st.set_page_config(
    page_title="Memória Ativa | Plataforma",
    page_icon="🧠",
    layout="centered"
)

# Injeção de CSS para garantir o visual Burgundy / Clean Profissional
st.markdown("""
    <style>
    /* Fundo Branco */
    .stApp {
        background-color: white;
    }
    
    /* Customização do Botão Primário (Burgundy) */
    div.stButton > button:first-child {
        background-color: #1B1F4B;
        color: white;
        border-radius: 12px;
        padding: 0.75rem 2rem;
        font-weight: 700;
        border: none;
        width: 100%;
        transition: all 0.2s ease-in-out;
    }
    
    div.stButton > button:first-child:hover {
        background-color: #A52A2A;
        border-color: #A52A2A;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    /* Card de Paywall Elegante - ESPECIFICAÇÃO DE PRODUÇÃO */
    .paywall-card {
        background-color: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 24px;
        padding: 48px;
        text-align: center;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        margin: 24px 0;
    }

    /* Títulos e Textos */
    h1, h2, h3 {
        color: #1B1F4B !important;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    .stTextArea textarea {
        border-radius: 12px;
        border: 1px solid #E2E8F0;
    }
    
    /* Barra de progresso customizada (Burgundy) */
    .stProgress > div > div > div > div {
        background-color: #1B1F4B;
    }
    </style>
""", unsafe_allow_html=True)

# =================================================================
# CONSTANTES E LINKS
# =================================================================
# Link do Sistema de Vendas (Checkout Eduzz)
CHECKOUT_URL = "https://sun.eduzz.com/2093557"

# =================================================================
# LÓGICA DE PAYWALL (BLOQUEIO)
# =================================================================

def verificar_limite_gratuito():
    """Interrompe a execução se o limite de 3 interações for atingido e exibe oferta."""
    if 'interacoes' not in st.session_state:
        st.session_state.interacoes = 0
    
    if st.session_state.interacoes >= 3:
        # Card Visual conforme solicitado para produção
        st.markdown(f"""
            <div class="paywall-card">
                <div style="font-size: 3.5rem; margin-bottom: 20px;">🔒</div>
                <h1 style="font-weight: 800; margin-bottom: 15px; color: #1B1F4B;">Fim do Teste Gratuito</h1>
                <p style="color: #64748B; font-size: 1.15rem; margin-bottom: 30px; line-height: 1.6;">
                    Você atingiu o limite de 3 interações gratuitas da sua demonstração.<br>
                    Para continuar utilizando o <b>Memória Ativa</b> de forma ilimitada e <br>
                    destravar sua aprovação, garanta seu acesso agora.
                </p>
            </div>
        """, unsafe_allow_html=True)
        
        # Botão de Venda Destacado
        st.link_button("🔓 DESTRAVAR ACESSO COMPLETO AGORA", CHECKOUT_URL, type="primary", use_container_width=True)
        
        # Interrompe o app para que nenhuma informação sensível apareça abaixo
        st.stop()

# =================================================================
# SISTEMA DE LOGIN SEGURO
# =================================================================

if 'logado' not in st.session_state:
    st.session_state.logado = False

if not st.session_state.logado:
    st.markdown("<div style='text-align: center; margin-top: 50px;'><h1 style='font-size: 2.5rem;'>🧠 Memória Ativa</h1></div>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; color: #64748B; margin-bottom: 30px;'>Faça login para continuar seus estudos</p>", unsafe_allow_html=True)
    
    with st.container():
        col1, col2, col3 = st.columns([1, 2, 1])
        with col2:
            usuario = st.text_input("Usuário", placeholder="E-mail ou nome de usuário")
            senha = st.text_input("Senha", type="password", placeholder="Sua senha")
            
            if st.button("Entrar na Plataforma"):
                # Validação de credenciais
                if usuario == "admin" and senha == "123456":
                    st.session_state.logado = True
                    st.rerun()
                else:
                    # SEGURANÇA: REMOVIDA QUALQUER DICA DE SENHA
                    st.error("Usuário ou senha incorretos.")
    st.stop()

# =================================================================
# INTERFACE PRINCIPAL (SÓ APARECE SE LOGADO E COM LIMITE)
# =================================================================

# Sidebar de Status e Controle
with st.sidebar:
    st.markdown("### 📊 Status da Conta")
    st.write("Usuário: **Estudante Visitante**")
    st.write("Plano: <span style='color: #A52A2A; font-weight: bold;'>TESTE GRÁTIS</span>", unsafe_allow_html=True)
    
    # Barra de Progresso de Uso Gratuito
    uso_atual = st.session_state.get('interacoes', 0)
    st.progress(min(uso_atual / 3, 1.0), text=f"Uso: {uso_atual} de 3 interações")
    
    if uso_atual >= 3:
        st.warning("Limite atingido!")
    
    st.divider()
    if st.button("🚪 Sair do Sistema"):
        st.session_state.logado = False
        st.rerun()

# Cabeçalho Principal
st.title("🚀 Painel de Estudos")
st.write("Transforme seu estudo passivo em retenção real com Active Recall.")

# Funcionalidade do Gerador
st.divider()
st.subheader("📝 Gerador de Questões de Memorização")
st.info("Insira o texto da lei ou artigo abaixo para começar seu treino ativo.")

texto_estudo = st.text_area(
    "Conteúdo para Estudo", 
    placeholder="Ex: Art. 5º Todos são iguais perante a lei...",
    height=180
)

if st.button("✨ GERAR TREINO ATIVO"):
    # Verifica Paywall ANTES do processamento
    verificar_limite_gratuito()
    
    if not texto_estudo or len(texto_estudo.strip()) < 5:
        st.warning("Por favor, cole um texto para processar.")
    else:
        # Incrementa contador de uso
        st.session_state.interacoes += 1
        
        with st.spinner("IA criando seus gatilhos de memória..."):
            import time
            time.sleep(2) # Simulação de IA
            
            st.success(f"Exercícios gerados! ({st.session_state.interacoes}/3 interações)")
            st.markdown("---")
            st.markdown("### 🧠 Desafios Gerados:")
            st.markdown("""
            > **Foco de Atenção:** Qual a exceção citada no segundo parágrafo deste texto?
            > 
            > **Treino de Lacuna:** Complete: "A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios: I - independência ______."
            """)
            st.info("Dica: No plano ilimitado, você pode salvar estes exercícios para revisão espaçada (SRS).")
