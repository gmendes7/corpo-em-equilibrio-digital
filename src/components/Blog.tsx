import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Como a genética pode influenciar seu emagrecimento",
    excerpt:
      "Descubra como seu DNA afeta sua capacidade de perder peso e como personalizar sua abordagem para resultados melhores.",
    image: "/blog1.jpg",
    category: "Emagrecimento",
    date: "10 de maio, 2023",
    content: `
      <h2>A relação entre genética e emagrecimento</h2>
      <p>A genética desempenha um papel fundamental no processo de emagrecimento. Estudos científicos mostram que cerca de 40-70% da variação no Índice de Massa Corporal (IMC) entre indivíduos pode ser atribuída a fatores genéticos. Isso significa que algumas pessoas têm uma predisposição genética que pode facilitar ou dificultar a perda de peso.</p>
      
      <h2>Principais genes associados ao emagrecimento</h2>
      <p>Vários genes foram identificados como importantes na regulação do peso corporal:</p>
      <ul>
        <li><strong>Gene FTO</strong> - Considerado o "gene da obesidade", está relacionado à sensação de saciedade e controle da fome</li>
        <li><strong>Gene MC4R</strong> - Regula o apetite e o gasto energético</li>
        <li><strong>Gene ADIPOSE</strong> - Influência na sensibilidade à insulina e metabolismo das gorduras</li>
      </ul>
      
      <h2>Como personalizar sua dieta com base na genética</h2>
      <p>A nutrigenômica (estudo da relação entre genética e nutrição) permite criar estratégias personalizadas para emagrecimento baseadas no seu perfil genético. Alguns indivíduos respondem melhor a dietas com baixo teor de carboidratos, enquanto outros obtêm melhores resultados com restrição de gorduras.</p>
      
      <p>Um teste genético específico pode revelar qual abordagem é mais adequada para você, tornando sua jornada de emagrecimento mais eficiente e sustentável a longo prazo.</p>
      
      <h2>Além da genética: epigenética e ambiente</h2>
      <p>Embora a genética seja importante, fatores ambientais e de estilo de vida podem "ligar" ou "desligar" certos genes. A epigenética estuda essas modificações que não alteram o DNA em si, mas afetam como os genes são expressos.</p>
      
      <p>Isso significa que, mesmo com predisposição genética para ganho de peso, hábitos saudáveis de alimentação e atividade física podem superar parcialmente essas tendências genéticas, demonstrando que você sempre tem controle sobre sua saúde, independentemente do seu DNA.</p>
    `,
  },
  {
    id: 2,
    title: "Gerenciando a diabetes naturalmente: abordagem integrativa",
    excerpt:
      "Estratégias naturais comprovadas cientificamente para ajudar no controle da glicemia e melhorar a qualidade de vida.",
    image: "/blog2.jpg",
    category: "Diabetes",
    date: "23 de abril, 2023",
    content: `
      <h2>Entendendo a diabete</h2>
      <p>A diabete é uma doença metabólica crônica caracterizada por níveis elevados de glicose no sangue. Existem principalmente dois tipos: diabetes tipo 1 (quando o corpo não produz insulina suficiente) e diabetes tipo 2 (quando o corpo não usa eficientemente a insulina produzida).</p>
      
      <h2>Abordagens naturais para gerenciar a diabete</h2>
      <p>Embora o tratamento médico convencional seja fundamental, diversas abordagens naturais e integrativas podem complementar o tratamento e melhorar significativamente a qualidade de vida:</p>
      
      <h3>1. Nutrição terapêutica</h3>
      <p>Uma dieta equilibrada é crucial para o controle glicêmico. Alimentos com baixo índice glicêmico ajudam a evitar picos de açúcar no sangue. Alguns alimentos benéficos incluem:</p>
      <ul>
        <li>Vegetais de folhas verdes (espinafre, couve, rúcula)</li>
        <li>Proteínas magras (peixe, frango sem pele)</li>
        <li>Gorduras saudáveis (azeite, abacate, nozes)</li>
        <li>Grãos integrais em porções controladas</li>
      </ul>
      
      <h3>2. Fitoterápicos com evidências científicas</h3>
      <p>Algumas plantas medicinais demonstram efeitos positivos no controle glicêmico:</p>
      <ul>
        <li><strong>Gimnema sylvestre</strong> - Pode reduzir a absorção de açúcar no intestino</li>
        <li><strong>Canela</strong> - Ajuda a melhorar a sensibilidade à insulina</li>
        <li><strong>Berberina</strong> - Estudos mostram eficácia similar a alguns medicamentos convencionais</li>
      </ul>
      
      <h3>3. Atividade física regular</h3>
      <p>O exercício físico aumenta a sensibilidade à insulina e ajuda a controlar o peso. Recomenda-se pelo menos 150 minutos semanais de atividade moderada, distribuídos ao longo dos dias.</p>
      
      <h3>4. Gerenciamento do estresse</h3>
      <p>O estresse crônico eleva os níveis de cortisol, que por sua vez aumenta a glicose sanguínea. Técnicas como meditação, yoga e respiração profunda podem ser aliadas importantes no controle do diabetes.</p>
      
      <p>É importante ressaltar que qualquer abordagem integrativa deve ser discutida com seu médico e não substitui o tratamento convencional prescrito.</p>
    `,
  },
  {
    id: 3,
    title: "Menopausa e equilíbrio hormonal: o que você precisa saber",
    excerpt:
      "Um guia completo sobre as mudanças hormonais na menopausa e como lidar com os sintomas de forma natural.",
    image: "/blog3.jpg",
    category: "Menopausa",
    date: "5 de abril, 2023",
    content: `
      <h2>Entendendo a menopausa</h2>
      <p>A menopausa marca o fim do período reprodutivo feminino e ocorre quando os ovários reduzem significativamente a produção de hormônios, principalmente estrogênio e progesterona. A idade média para o início da menopausa é entre 45 e 55 anos, embora possa ocorrer mais cedo ou mais tarde em algumas mulheres.</p>
      
      <h2>Os principais sintomas da menopausa</h2>
      <p>As flutuações hormonais durante a menopausa podem causar diversos sintomas:</p>
      <ul>
        <li>Ondas de calor e sudorese noturna</li>
        <li>Alterações no humor (irritabilidade, ansiedade, depressão)</li>
        <li>Insônia e distúrbios do sono</li>
        <li>Ressecamento vaginal e desconforto durante a relação sexual</li>
        <li>Alterações na libido</li>
        <li>Ganho de peso, especialmente na região abdominal</li>
        <li>Pele mais fina e menos elástica</li>
      </ul>
      
      <h2>Abordagens naturais para equilibrar os hormônios</h2>
      
      <h3>1. Fitoterapia baseada em evidências</h3>
      <p>Algumas plantas medicinais têm mostrado benefícios no alívio dos sintomas da menopausa:</p>
      <ul>
        <li><strong>Isoflavonas de soja</strong> - Contêm fitoestrógenos que podem ajudar a reduzir as ondas de calor</li>
        <li><strong>Cimicífuga racemosa (Black cohosh)</strong> - Estudos indicam benefícios para os sintomas vasomotores</li>
        <li><strong>Trevo vermelho</strong> - Rico em isoflavonas com efeitos estrogênicos suaves</li>
      </ul>
      
      <h3>2. Nutrição para a menopausa</h3>
      <p>Uma alimentação adequada pode minimizar os sintomas e reduzir riscos à saúde associados à menopausa:</p>
      <ul>
        <li>Alimentos ricos em cálcio e vitamina D para proteger a saúde óssea</li>
        <li>Ômega-3 para reduzir a inflamação e melhorar o humor</li>
        <li>Alimentos ricos em fitoestrógenos como linhaça, grão-de-bico e legumes</li>
        <li>Redução de cafeína e álcool que podem piorar ondas de calor</li>
      </ul>
      
      <h3>3. Exercícios físicos regulares</h3>
      <p>A atividade física ajuda a:
      <ul>
        <li>Manter a massa óssea e muscular</li>
        <li>Regular o humor através da liberação de endorfinas</li>
        <li>Controlar o peso corporal</li>
        <li>Melhorar a qualidade do sono</li>
      </ul>
      
      <h3>4. Técnicas de gerenciamento do estresse</h3>
      <p>O estresse pode exacerbar os sintomas da menopausa. Práticas como ioga, meditação e técnicas de respiração profunda podem ajudar a restaurar o equilíbrio e melhorar o bem-estar geral durante essa fase.</p>
      
      <p>É importante consultar um profissional de saúde especializado em saúde da mulher para desenvolver um plano personalizado que atenda às suas necessidades específicas durante a menopausa.</p>
    `,
  },
];

const categories = [
  "Todos",
  "Diabetes",
  "Emagrecimento",
  "Menopausa",
  "Genética",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(false);
  // Simulating API load effect when changing categories
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);
    };

    loadPosts();
  }, [activeCategory]);

  // Filtra os posts com base na categoria selecionada
  const filteredPosts =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const handleReadMore = (postId: number) => {
    // Track that a user clicked on a specific post
    console.log(`User clicked on post ${postId}`);
  };

  return (
    <section id="blog" className="section bg-white relative overflow-hidden">
      {/* Elementos decorativos de plantas */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20 leaf-animation">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>

      <div
        className="absolute bottom-20 left-0 w-32 h-32 opacity-20 leaf-animation"
        style={{ animationDelay: "1.5s" }}
      >
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>

      <div className="container-custom">
        <div className="text-center mb-12 staggered-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nosso <span className="text-brand-green">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artigos informativos e baseados em ciência para ajudar você a
            entender melhor sua saúde e as opções de tratamento disponíveis.
          </p>
        </div>

        {/* Categories filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 staggered-fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                category === activeCategory
                  ? "bg-verde-musgo text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-verde-claro"
              }`}
              onClick={() => setActiveCategory(category)}
              aria-label={`Filtrar por ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog posts with loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="h-6 w-16 bg-gray-200 rounded-full"></span>
                    <span className="h-4 w-24 bg-gray-200 rounded"></span>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium bg-verde-claro text-verde-musgo px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-verde-musgo hover:text-verde-musgo/80 font-medium flex items-center transition-colors"
                      onClick={() => handleReadMore(post.id)}
                    >
                      Leia mais
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-600 text-lg">
                  Nenhum artigo encontrado nesta categoria.
                </p>
              </div>
            )}
          </>
        )}

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-secondary">
            Ver Todos os Artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
