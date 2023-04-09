import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseButtonIcon from "./../../../assets/svgs/CloseButtonIcon";

const FollowingsModal = ({ show, handleClose, templateTheme }) => {
   return (
      <Modal open={show} onClose={handleClose} sx={{ backdropFilter: "brightness(60%)" }}>
         <Wrapper templateTheme={templateTheme}>
            <Header>
               <EmptyDiv />
               <Title>Followings</Title>
               <CloseBtn onClick={handleClose}>
                  <CloseButtonIcon />
               </CloseBtn>
            </Header>
            <ModlaBody>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam sequi nisi deleniti itaque omnis quae asperiores, quasi necessitatibus soluta eum in
               doloremque eaque labore explicabo facere velit inventore, ipsam, placeat corporis! Minima, voluptatem fugiat amet rerum repudiandae aspernatur! Voluptates
               animi est quo dolore quia quas, nihil velit temporibus soluta, in libero adipisci quasi laudantium inventore ipsam ipsum doloremque! Quos, ea error magnam
               reprehenderit maxime, mollitia dolorem quisquam eius nesciunt laboriosam perferendis, repellendus ullam rem aliquam voluptas voluptates recusandae itaque
               perspiciatis adipisci. Excepturi delectus quisquam et libero eaque magnam voluptas aut velit. Consectetur excepturi consequuntur ut? Doloremque alias ad,
               veritatis nesciunt ab recusandae hic minima. Reiciendis impedit dolorem maxime fugit quibusdam animi itaque suscipit odit! Quae perferendis voluptate
               obcaecati quidem dolorum similique soluta, possimus doloribus temporibus tempore distinctio at cupiditate fugiat eaque quaerat accusamus velit nostrum
               minus. Vitae tenetur, odit velit aperiam neque autem facere explicabo corrupti pariatur vero provident officia error, illo delectus voluptate placeat
               porro! Exercitationem soluta a quibusdam voluptatibus laboriosam dolorem accusamus! Rerum deserunt voluptatem excepturi dolore eveniet quasi exercitationem
               enim reiciendis quia. Cum facere laboriosam aut, quas accusantium ipsam ducimus doloremque omnis, voluptatem neque, culpa animi maiores perferendis
               quisquam debitis! Praesentium fugit itaque consectetur mollitia vel minima distinctio blanditiis omnis voluptatem, rerum, ad sapiente? Voluptas quasi
               officiis dicta est ipsum dolore repellendus reiciendis eligendi. Deserunt vel neque, quos quaerat eius numquam animi excepturi obcaecati sint incidunt,
               velit voluptates tempore, laborum laboriosam distinctio repellendus soluta quidem quia iusto fuga deleniti. Adipisci quasi vero officiis assumenda
               pariatur, quo iure non eum ex nihil architecto culpa eaque molestias vitae! Cum error, modi dolorum earum saepe animi soluta perferendis alias! Et minima,
               rem facilis delectus porro maxime, magnam praesentium nisi tempore voluptate at quia dignissimos sint blanditiis neque aspernatur. Voluptatem quasi nam
               dolor reiciendis ipsa quibusdam velit, quod ea explicabo nesciunt placeat, vero harum eaque magni! Provident laboriosam ab accusantium impedit eaque
               dolore, at rerum maiores atque vero, ex, ad blanditiis consequatur a nesciunt reprehenderit sequi delectus quidem! Nam quidem saepe accusantium obcaecati
               at odit, provident, molestias blanditiis sed ullam hic, fugiat labore adipisci velit necessitatibus consequatur? Eaque impedit error unde. Assumenda, illo.
               Voluptatibus, illum dignissimos nisi rem quidem placeat quibusdam accusantium vel aliquid maxime corporis voluptatum beatae animi omnis. Consequatur harum
               nam modi iste voluptatum, tenetur praesentium corrupti expedita eum nesciunt. Magnam minima cumque eos voluptatibus repellendus laboriosam reprehenderit
               deleniti molestias distinctio illum enim magni, accusamus sequi sapiente cupiditate omnis veniam dolore! Quibusdam necessitatibus corrupti modi quia beatae
               ab aspernatur aperiam distinctio dolores, suscipit, accusantium corporis optio nostrum provident alias fugiat eveniet sequi magnam possimus excepturi quod
               libero magni. Corporis assumenda dolores, iste velit eos illum libero praesentium debitis atque eius unde quo modi quos similique illo rerum natus
               perspiciatis quas reiciendis nisi provident, eaque ipsam quidem nihil? Quasi molestiae aut ea fugit vel in? Eum vitae voluptas exercitationem dolore veniam
               quibusdam odit laboriosam, porro praesentium numquam impedit necessitatibus reprehenderit dignissimos non dolorum ipsa inventore earum fugiat, similique
               eos repellat. Labore qui nemo quo possimus non incidunt placeat reiciendis similique cupiditate aut itaque dolor quis, optio ipsum voluptatum iure
               architecto, consectetur sequi! Quia temporibus consectetur et id libero ullam labore magni ad illo officia provident, dignissimos enim quas, velit error
               rerum impedit quod, iure nemo adipisci nesciunt quo laudantium quos quasi! Corporis reprehenderit libero recusandae ea, quidem consequuntur adipisci. Quia
               iure, optio, nulla aliquid ratione ducimus neque placeat aspernatur, iste enim nihil? A odio eligendi aliquam totam nemo voluptatibus maxime magnam
               assumenda laborum aut voluptates voluptas culpa, aspernatur dolorem necessitatibus nobis ullam temporibus quod architecto. Fugiat rerum nobis dolorem
               mollitia, neque distinctio. Hic laborum, qui officiis saepe placeat accusamus?
            </ModlaBody>
         </Wrapper>
      </Modal>
   );
};

export default FollowingsModal;

const Wrapper = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 40rem;
   background-color: ${({ templateTheme }) => templateTheme};
   border-radius: 1rem;
   overflow: hidden;
   border: 0.1rem solid var(--border-color);

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
   @media (max-width: 600px) {
      width: 27rem;
   }
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 1rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding: 1.5rem;
`;

const EmptyDiv = styled.div``;

const Title = styled.h5`
   font-weight: 500;
`;

const CloseBtn = styled.div`
   cursor: pointer;
`;

const ModlaBody = styled.div`
   max-height: 40rem;
   overflow: auto;
   padding: 1.5rem;
`;
