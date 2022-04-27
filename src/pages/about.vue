<template lang="pug">
  v-container.mt-15.text-left
    h1 About the Project
    br 
    p Remote learning is relatively new for the education sector of the Philippines and is proving to be a challenge to both the students and the teachers. Preschoolers are in a stage where they are highly active, and developing their socio-emotional competence is important. However, surveys and studies have shown that many students are not engaged in distance learning methods. Higher engagement has been associated with higher emotional investment and, in turn, the expression of preschool children's emotional responses shows socio-emotional development. 
    p This study aims to quantify and objectively measure student engagement through facial expressions. We help researchers and educators further understand the correlation of emotion with the engagement of a child by developing a web-based storytelling platform that automatically recognizes emotion using machine learning and analyzes the findings that reports student engagement from emotion recognition. 
    p We aim to objectively assess a factor of a preschooler's socio-emotional development by gathering their emotional response during a story-telling video. The data gathered from this platform would be able to help assess the viability of remote and alternative learning for preschoolers.
    h3 Objectives of the Project
    ol
      li To develop a web-app that recognizes a student's facial expression during story telling.
      li To collect and use emotion recognition data from the system during storytelling and compare it with the expected emotion of the student.
      li To analyze and summarize the emotion recognition data that quantifies whether or not a student is engaged based on the facial expressions and emotions evoked by the student during storytelling.
    br
    h2 Target Participants
    p The study aims to collect data on ten (10) or more students in the preschool level at the age of 4-5 years old. To increase the accuracy of the data, we accept as many participants as we can accommodate. 

    h2 Data Gathering Process and Extent of Participation
    p The goal of the data collection phase is to set the ground truth of our expected emotions  during a part of the story. We will gather video recordings of ten (10) or more students watching the video stimuli via a web-app we developed. 
    p The whole process will take no more than 6 minutes. The data gathered will only be used for the purposes of research (e.g. analysis of emotions etc.) and will not be available to anyone aside from the researchers. 
    h3 Guidelines:
    ol 
      li Please record in a well-lit room.
      li Make sure that the webcam is in front of the child, and the whole face is visible. 
      li Allow the browser access to the microphone. This will be used to sync the video and the facial response.
      li Allow the browser access to the webcam.
      li Click the red button (start recording) before playing the youtube video
      li The data gathered will be used for our study 
        b AND ONLY FOR THE STUDY. 
      li At anytime, the child may opt to stop watching at anytime. The child has the right to withdraw from the study. 
    br
    h1 About the Team
    p We are undergraduate students of UP EEEI. We are currently taking up CoE 198 - the final capstone project of our program under the supervision of Prof. Nestor Michael Tiglao. The team is also under the guidance of Asst. Prof. Erickson M. Maclid.
    a(href="https://drive.google.com/file/d/1EF7mn30F2qVB4xCo38Cth2q6pf9hO6pK/view?usp=sharing") Here
    |  is a link to our technical paper.
    br
    br
    h3 Researchers
    ul
      li Argel, Aaron Jay 
      a(href="aaron.jay.argel@eee.upd.edu.ph") aaron.jay.argel@eee.up.edu.ph
      li Lindo, Markus Elija Thomas 
      a(href="elija.lindo@eee.upd.edu.ph ") elija.lindo@eee.upd.edu.ph 
      li Manalo, Christian Angelo 
      a(href="angelo.manalo@eee.upd.edu.ph ") angelo.manalo@eee.upd.edu.ph 
      li Ragmac, Madeleine
      a(href="madeleine.ragmac@eee.upd.edu.ph ") madeleine.ragmac@eee.upd.edu.ph 
    br
    br
    br
    
</template>

<script>
export default {
  head() {
    return {
      title: "About"
    };
  },
  name: "InspirePage",
};
</script>
