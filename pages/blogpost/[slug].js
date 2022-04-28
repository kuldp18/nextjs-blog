import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const PostSlug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className={styles.main}>
      <h1 className={styles.blogTitle}>Title of page {slug}</h1>
      <hr />
      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti
        dignissimos dolorem, necessitatibus unde voluptatibus magnam
        perspiciatis impedit quibusdam. Asperiores error cumque nisi,
        exercitationem labore magni suscipit, facere maxime quidem provident
        autem, modi iste reiciendis enim ab fugit voluptas rerum repellendus in.
        Ea et, voluptatibus beatae quo aspernatur quis cupiditate corporis vero
        deleniti molestiae reprehenderit dolor adipisci dolorem repudiandae
        ducimus doloribus, quam officiis! Odit officia magnam in sed voluptates
        porro doloribus facere vel deleniti asperiores vero voluptatibus quaerat
        ratione reprehenderit voluptas, quo sapiente distinctio maiores, omnis a
        necessitatibus praesentium minus rem accusamus. Natus deserunt corporis
        commodi, modi dolor nesciunt debitis consequatur. Nemo quaerat nihil
        nisi assumenda illum dolorem quasi dolore doloribus debitis voluptatem
        hic, iusto, molestiae tenetur consectetur quisquam ea in ab veritatis
        sapiente, error nesciunt! Perferendis est tempore fuga incidunt deleniti
        ad! Eligendi quae, officiis, odit minima fugit laudantium minus
        blanditiis sit consequuntur perferendis, repudiandae amet placeat.
        Asperiores sunt maxime temporibus et quam. Itaque, accusantium.
        Obcaecati vitae, enim a delectus et est illo dolor voluptatem omnis
        autem, minus debitis beatae sapiente iusto modi eius magnam? Dolore
        reprehenderit fuga mollitia neque, qui pariatur, ullam facilis
        doloremque, ea sint et labore. Quibusdam aperiam explicabo quo
        accusantium ut quas. Incidunt voluptatum molestias voluptates suscipit!
        Similique accusantium ut sit culpa doloribus nesciunt? Pariatur
        explicabo magni odio, asperiores amet eaque excepturi quaerat maxime rem
        porro magnam mollitia enim itaque commodi nulla illo. Placeat dolor
        quaerat ullam voluptatibus autem quibusdam saepe suscipit amet
        voluptatem illo vel unde ipsam repudiandae tenetur, maiores voluptates
        cum nostrum debitis dolorem laboriosam expedita odio. Saepe officia esse
        tenetur qui nulla repudiandae eaque ipsa quae obcaecati. Laboriosam
        dolorum hic adipisci quidem voluptatum dolor dicta sed laborum similique
        reiciendis eaque delectus temporibus nostrum itaque quis molestias aut
        neque repellendus, incidunt commodi necessitatibus libero aliquam! Magni
        minus recusandae ipsum omnis ipsam deleniti doloribus aspernatur dolor.
        Nostrum ab, ea quaerat dolorum illo tempore eveniet libero molestias ad
        voluptas sapiente, repellat facilis recusandae. Expedita voluptatibus
        mollitia sed consectetur assumenda eligendi, molestias ea at alias quia
        atque modi, voluptate culpa! Nisi fugiat exercitationem a commodi
        explicabo non dicta iure, laudantium magni voluptate quo veritatis earum
        doloremque placeat dolorum excepturi hic id, necessitatibus natus saepe.
        Sed corporis reiciendis voluptas incidunt fugit aspernatur natus
        inventore, magni labore, necessitatibus similique. Doloribus minima
        corrupti optio ab, obcaecati est enim quidem iusto dolorem sunt
        voluptatibus consectetur perferendis nam quia eaque nulla corporis
        accusantium aliquam quae adipisci quam atque molestiae. Quisquam est
        nostrum aut laudantium sit voluptate eveniet fugiat, a quidem ratione
        eos! Provident, natus quia, officia consequatur adipisci animi quod iure
        perferendis est praesentium obcaecati eveniet deserunt odio aperiam.
        Labore, ullam ut et, nemo nostrum facere illo similique saepe at
        excepturi illum pariatur? Impedit unde facere ad culpa aperiam atque eos
        a ratione laboriosam quis tenetur, nam ex blanditiis accusantium ipsum
        non cum aspernatur voluptatem perspiciatis commodi. Explicabo in magnam
        enim, voluptates pariatur deleniti natus labore. Voluptatibus, quia eum
        alias debitis sint sunt dolores quidem nobis nemo velit, qui itaque
        incidunt totam labore asperiores repudiandae nostrum dolore
        necessitatibus recusandae, eveniet laudantium.
      </div>
    </main>
  );
};

export default PostSlug;
