import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css";
import Content from "@/__webComponents/headings/Content";
import { useRouter } from 'next/router';

const BlogDetails = () => {
  
  const router = useRouter();

  // Access query parameters passed from the MapCard component
  const { title, date, image, details } = router.query;

  const dumyDate1 = [
    {
      title: "1. Embarking on the Journey of Self-Discovery",
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
       <Content
        width="100%"
        subFonts="20px"
        subWidth="100%"
        mblcolor="#E1683B"
        heading=""
        subHeading={details}
      />
      {/* <Content
        width="100%"
        subFonts="20px"
        subWidth="100%"
        mblcolor="#E1683B"
        heading="1. Embarking on the Journey of Self-Discovery"
        subHeading="Embarking on the journey of writing your autobiography is a profound and transformative experience.  Crafting Your Legacy:A Guide to Writing Your Autobiography serves as a comprehensive compass, guiding you through the intricate yet rewarding process of immortalizing your life's story on paper."
      /> */}
{/* 
      <Content
        width="100%"
        subFonts="20px"
        subWidth="100%"
        mblcolor="#E1683B"
        heading="2. Unveiling the Treasury of Memories"
        subHeading="The initial step in this introspective expedition involves unveiling the treasury of memories that have shaped your existence. Delve into prompts and exercises meticulously designed to elicit recollections, unlocking the vibrant details that contribute to the tapestry of your unique story. From the innocent anecdotes of childhood to the pivotal moments that defined you, this chapter sets the stage for a narrative that captures the essence of your being."
      /> */}

      {/* <Content
        width="100%"
        subFonts="20px"
        subWidth="100%"
        mblcolor="#E1683B"
        heading="3. Crafting an Authentic Narrative"
        subHeading="As memories unfold, the next phase is an artful endeavor — transforming these fragments into a coherent narrative. Practical insights illuminate the path, guiding you in structuring your autobiography. Selecting a writing style that resonates and crafting a timeline that engages your readers become integral aspects of this process, ensuring a seamless transition from the recesses of your thoughts to the pages of your manuscript."
      /> */}

      {/* <Box>
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: { sm: "50px", xs: "36px" },
            fontWeight: 500,
            color: { xs: "#E1683B", sm: "#3E4F3C" },
          }}
        >
          4. Navigating Challenges and Refining Your Masterpiece
        </Typography>
        <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
          Discovering Your Unique Voice
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Authenticity is the heartbeat of any autobiography. The journey
          through this guide encourages you to discover and embrace your unique
          narrative voice. Stay true to your story, captivate your readers, and
          infuse your autobiography with a genuine authenticity that reflects
          your distinct perspective and life experiences.
        </Typography>
        <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
          Overcoming Writing Challenges
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Challenges are inevitable in the writing journey, from emotional
          hurdles to the fear of vulnerability. This guide addresses these
          common obstacles, providing strategies to navigate them with grace and
          empowering you to share your story authentically and confidently.
        </Typography>
        <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
          Refining Your Masterpiece
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          The refining process is equally crucial. The guide introduces you to
          self-editing techniques, emphasizes the importance of seeking
          feedback, and imparts wisdom on refining your writing. This chapter
          ensures your autobiography evolves into a polished and compelling
          masterpiece, ready to be shared with the world.
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            lineHeight: { sm: "50px", xs: "36px" },
            fontWeight: 500,
            color: { xs: "#E1683B", sm: "#3E4F3C" },
          }}
        >
          5. Navigating Publication and Contemplating Legacy
        </Typography>
        <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
          Publication and Distribution
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          As your autobiography nears completion, the journey doesnt conclude.
          The guide navigates you through the diverse options for publication
          and distribution. Whether through traditional publishing,
          self-publishing, or sharing your story with a select audience, this
          section ensures your legacy reaches its intended audience.
        </Typography>
        <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
          Contemplating Your Legacy
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          In the concluding reflections, the guide prompts you to contemplate
          the profound journey of crafting your autobiography. Its not just
          about the words on the pages; its about the impact your story can have
          on others. Embrace your legacy beyond the tangible pages, considering
          the potential ripple effects and the lasting imprint you leave on
          future generations.
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "20", fontWeight: 800, margin: "15px 0" }}>
        &quot;Crafting Your Legacy: A Guide to Writing Your Autobiography&quot;
        is more than a guide; it&apos;s an invitation to embark on a journey of
        self-discovery and storytelling. Embrace the process, let your words
        become a legacy that resonates through time, ensuring your story is told
        with the depth and authenticity it deserves.&quot;
      </Typography> */}
    </Box>
  );
};

export default BlogDetails;
