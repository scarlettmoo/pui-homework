# FP1 - Proposal for Critique

## Interactive Art Installation

The basic idea of my final project is to create an interactive installation that uses p5.js and a face-tracking algorithm to challenge societal norms around slut-shaming. In this experience, words like "slut" cascade from the top of the screen, only to come to a halt when they touch the viewer's face, viewers are prompted to confront the damaging impact of derogatory language on women's self-expression and autonomy. The design will be interactive and engaging by allowing users to physically move their faces, directly interacting with the falling words. To ensure accessibility, I will use clear and semantic HTML tags, making the installation easier to navigate with screen readers. The message I want to convey through this art installation is to challenge societal norms and confront the issue of slut-shaming. 

![Local Image](images/idea1.png)

## Interactive Game Tetrics

The basic idea of my second project is to create an interactive rendition of the classic game Tetris, titled "Tetrics," offering a digital environment where users can engage with this iconic puzzle game. Players will interact with falling blocks, arranging them to complete lines and challenge their problem-solving skills. The design will be interactive by allowing players to control the blocks using keyboard input or touch controls, making the gameplay intuitive and responsive. To ensure accessibility, I will use clear and semantic HTML tags, allowing for compatibility with screen readers and assistive technologies. The core message of this project is to provide an enjoyable and accessible gaming experience that fosters entertainment and mental challenge.

![Local Image](images/idea2.png)


## Personal Portfolio

The basic idea of my third project is to create a personal portfolio that showcases my self-introduction, HCI projects, internship experiences, and artistic work, including drawing and photography. The portfolio will be interactive by providing easy navigation through different sections, allowing visitors to explore each area of my work seamlessly. To ensure accessibility, I will use clear and semantic HTML tags, making the website navigable with screen readers and accessible to all users. The goal of this portfolio is to present a well-rounded view of my professional and creative journey, highlighting both my technical skills in UIUX and artistic expression.

![Local Image](images/idea3.png)

## Feedback Summary

From the feedback session, I learned that people really liked my first idea, the interactive art installation under the theme of slut shaming, since it is fun to interact with but also has its educational purpose. My second idea of Tetris is also loved since it is a upgrade of the traditional game but it would be challenging to create something new on top of a classic game. And if I aim to build a 3D Tetris, it might be hard to realize the 3D visuals in JavaScript. And especially if I want to keep the rotation feature in a 3D Tetris, I will probably have to code each block individually and figure out the rotation figure in JavaScript, which will take up a lot of work. Also, I decide not to continue with my third idea, which is the personal portfolio, since a lot of people are doing portfolio for their final project so the TA suggets us to try something different and fun. 

The main concern that was brought up during the feedback session was the ability to implement the face-tracking algorithm in JavaScript since I can only find similar algorithm in Python. Hoepefully I can find a similar algorithm in p5.js, which will be the easiet way I can imagine to implement in JavaScript. Also, people gave me valuable advice on the visuals of the interface. For example, when the words were 'raining' from the top of the screen to the bottom, I need to make sure they do not interfere with the background so it is easy for the audience to read. Additionally, I can include more subtle slut shaming words instead of only including intrusive words like "cunt". And I can also add an audio component to the interface when the words land on the viewer's face to build a more wholistic experience for the viewer. 

## Feedback Digestion

Thus, taking all the feedback above, I decide to move froward with my first idea for the final project, which is the interactive art installation under the theme of slut shaming. The feedback session highlighted several key areas to refine and improve my idea. The primary technical challenge identified was implementing the face-tracking algorithm in JavaScript. After the critique session, I did some research on the face-tracking algorithm and I found several robust face-tracking algorithms in Python but JavaScript offers fewer options, which limits my flexibility. However, I did find some face-tracking algorithm in p5.js which should work for my project. However, it only provides basic tracking of the face so maybe I need to customize the existing algorithm like adding more detection points on the face to make the algorithm work more precisely to achieve the desired effect.

Beyond the technical requirements, the feedback also prompted me to think about the project’s visual presentation, especially the display of the background and the words cascading from the top of the screen. To ensure that the audience can read the words properly, I plan to experiment with the background and text contrast. One approach could be using a single color for the background like black and a different color for the words like red to highlight the words. Another approach can be using a blurred or semi-transparent background to prevent the words from blending in, or adding a subtle shadow or glow effect around each word to make it stand out. These tweaks can enhance readability while preserving the visual cohesion of the installation. I will experiment with different approaches but I think for artistic purposes, I would like to maintain a minimalistic, monochromatic palette that aligns with the serious tone of the subject but also ensures clarity and focus on the interactive elements.

Taking in all the feedback from today, the next step for me will be to do more research on the face-tracking algorithm to figure out how to incorporate it into JavaScript and experiment with different visuals. The session has provided actionable insights to push both the technical and thematic aspects of the installation forward, and I’m looking forward to exploring these solutions as I continue to develop the project.