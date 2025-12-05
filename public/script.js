const webcam = document.getElementById("webcam");
const captureBtn = document.getElementById("captureBtn");
const imageInput = document.getElementById("imageInput");
const resultImg = document.getElementById("resultImg");
const startBtn = document.getElementById("startBtn");
const retakeBtn = document.getElementById("retakeBtn");
const restartBtn = document.getElementById("restartBtn");
const themeButtons = document.querySelectorAll(".themeBtn");
const countdownEl = document.getElementById("countdown");

const TARGET_WIDTH = 768;
const TARGET_HEIGHT = 1344;
const TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT;

const steps = {
  start: document.getElementById("stepStart"),
  theme: document.getElementById("stepTheme"),
  capture: document.getElementById("stepCapture"),
  loading: document.getElementById("stepLoading"),
  result: document.getElementById("stepResult"),
};

const showStep = (name) => {
  Object.values(steps).forEach((el) => el.classList.remove("active"));
  steps[name].classList.add("active");
};


const themes = {
  new: [
    `A hyper-realistic, full-body portrait of a Asian industrial engineer standing in the center of a futuristic, eco-friendly energy park. Wearing a clean blue industrial jumpsuit, a high-visibility orange and highly silver reflective safety harness, white safety gloves, black combat boots, and a white hard hat featuring the corporate logo provided in the second reference image (local pertamina.png) (right pertamina logo) "PETAMINA" text. Stands with hands on his hips in a heroic pose. The body pose is slightly rotate to the left, while the face remain make a contact to camera.

The background features a "Solarpunk" utopian setting with lush green terraced gardens, advanced circular solar panels, and futuristic glass bio-domes. A large, glowing blue energy spire towers in the distance. There are drones hovering in the blue sky. The ground features water canals bordered by glowing neon blue light strips and crystalline energy formations. The lighting is bright and sunny, cinematic, and vibrant, with a high-definition 3D render aesthetic like Unreal Engine 5.

Camera : Full body shot with tight head room
Lighting : Bright keylight with tungsten rim light from sun light`,
  ],
  hero: [
    `A product photography style image featuring two main objects on a clean, slightly reflective black or dark grey surface, typical of product photography for action figures.
    On the right side of the frame, there is a full body shot of the provided subject, rendered as a premium collectible action figure. The figure is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image, appearing as sculpted plastic components. Maintain the identical body proportions and stature as in the reference image, rendered with the distinct, articulated appearance of an action figure. Maintain the identical skin tone, texture, and facial lighting, but applied to a matte plastic finish. The figure stands on a black base with the "Avengers: Endgame" logo, similar to the reference image.
    On the left side of the frame, positioned in the foreground and slightly lower than the full figure, is a close-up of the subject's helmet, also rendered as a premium collectible. This helmet rests on a similar black base with the "Avengers: Endgame" logo. The eyes of the helmet glow blue.
    The subject is depicted in a heroic and determined pose, characteristic of a dynamic action figure, ready for adventure. They are wearing a suit of red and gold futuristic armor, similar in style to Iron Man's suit but adapted to the provided subject's form, with visible sculpted metallic textures and a glowing arc reactor-like element on the chest. All armor elements should appear as expertly molded and painted plastic with a metallic sheen. Their right hand is raised slightly, as if preparing to fire a repulsor blast, with clearly defined articulation points at the joints.
    The subject's expression is resolute, intelligent, and slightly confident, with eyes (or glowing elements on the helmet) gazing forward, full of strategic thinking and a readiness to face challenges. The expression must be energetic and full of personality, conveying a classic heroic spirit, expertly sculpted to capture motion and emotion, while strictly maintaining the facial features and expression from the provided reference image.
    Lighting and Atmosphere: The scene is illuminated by bright, studio-like lighting, designed to showcase the action figure's details, with precise highlights and shadows that emphasize the sculpted forms. There is a realistic play of light and shadow on the subjects, highlighting contours and textures as if under controlled studio conditions. The colors are vibrant and saturated, reflecting a high-quality paint application on a collectible figure. The background is a clean, slightly reflective black or dark grey surface, typical of product photography for action figures, providing a dramatic contrast without distraction. The overall mood is one of excitement, joy, and heroic adventure, presented as a premium display piece.
    Focus and Detail: Emphasize realistic sculpted metallic textures on the armor, glowing effects of the arc reactor-like element and eyes, and the subtle lines on the armor plating, all rendered as if cast from high-quality plastic with intricate paintwork. The depth of field is moderately shallow, with both the full figure and the head sculpt/helmet rendered in impeccable sharpness and fine detail. The background is softly blurred to provide artistic context without distracting from the main subjects. Absolutely no other people or objects are present in the foreground, ensuring the focus is solely on the action figures.
    The composition should mimic the reference image, with the full figure prominently on the right and the helmet on the left, creating a balanced product display. High-quality cinematic rendering is paramount, free from any digital artifacts, aiming for a style that mimics expertly photographed action figures. Aspect ratio similar to the provided reference image (approximately 1:1 or slightly wider).
    This image is to be generated by applying the visual characteristics of the provided subject (from the uploaded photo) onto the described action figure template.`,
  ],
  contestant: [
    `The provided image of the subject should be depicted in a medium shot, preserving every detail of their facial features, proportions, and expressions—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting.

The subject's face must clearly show an expression of startled alertness mixed with tense apprehension, mirroring the look in the provided reference image. Their eyes are wide open, directly focused, conveying a sense of surprise but also intense observation and caution. The eyebrows are slightly furrowed in concern or confusion. The mouth is slightly parted or subtly downturned, indicating a moment of shock or unease rather than a grimace of pure determination. This nuanced expression should convey a deep sense of being caught off guard yet immediately assessing the situation with palpable tension.

The subject's body is robustly posed in an 'engage to fight' stance: shoulders noticeably hunched forward, forming a defensive posture. One arm, either the left or right (depending on the most natural flow for the pose), is slightly raised and subtly clenched, with the hand partially or fully fisted, conveying a clear sense of being on high alert, braced for impact, and prepared to react defensively or offensively. The overall body language exudes a readiness to defend or counter-attack.

They are wearing a thick, textured dark green tracksuit jacket, made of a durable, slightly worn polyester blend, with prominent, clean white stripes (approximately 3cm wide) precisely positioned along the outer seams of the shoulders and sleeves, extending down to the cuffs. The jacket's zipper is fully closed, reaching the base of the neck. On the left chest area, a striking rectangular patch, roughly 7cm by 5cm, with a vibrant red background and a bold white 'X' centrally placed, is firmly sewn. Next to it, on the right chest area, a crisp, white-bordered, black rectangular patch with the bold white number '541' in a clean sans-serif font is meticulously embroidered. Critically, a dark, irregular stain, approximately 7-10cm in diameter, with slightly blurred edges and a matte finish, is situated on the right shoulder area of the jacket, suggesting a past incident without being explicitly graphic. The fabric of the tracksuit should show realistic folds and subtle creases, reflecting the pose and movement.

The background is an exact replication: a dark, profoundly unsettling, and distinctly claustrophobic hallway or room. The walls are illuminated by an unnatural, intense neon or UV-like light, casting an eerie glow. These walls are entirely covered with abstract, frantic, sketchy, and childlike drawings or scribbles, rendered in vibrant, contrasting colors (such as electric pinks, sickly greens, and harsh oranges). These drawings depict distorted figures, ominous shapes, and unsettling patterns, creating a hallucinatory and disorienting effect. The floor is dark and unremarkable, adding to the oppressive atmosphere. There are no alterations to the elements, proportions, or style of this background. Absolutely no other people are present in the background.

Close-up portrait shot, captured with an analog photo tone, emulating a 35mm film aesthetic with subtle grain. Harsh, dramatic, high-contrast lighting from an unseen source bathes the scene, creating deep, defined shadows and stark highlights, particularly emphasizing the subject's tense facial features and the textures of their uniform. A very shallow depth of field ensures the subject is sharply in focus while the background is beautifully blurred, enhancing their prominence and the sense of isolation. Realistic, slightly desaturated color tones, accurate to traditional film photography, are applied, leaning towards cooler hues to enhance the unsettling mood. The composition is cinematic, framing the subject slightly off-center for visual interest. Emphasize ultra-detailed embroidery texture on the patches, realistic fabric folds and shadows on the uniform, and professional photography quality, free from any digital artifacts. The overall mood is one of intense psychological tension, imminent danger, startled apprehension, and a desperate, determined resolve. Aspect ratio 9:16 (portrait).`,

    `A cinematic, highly detailed medium shot portrait of the provided subject, positioned centrally in the frame. The subject is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting.
The subject is wearing a thick, textured dark green tracksuit jacket, made of a durable, slightly worn polyester blend, with prominent, clean white stripes (approximately 3cm wide) precisely positioned along the outer seams of the shoulders and sleeves, extending down to the cuffs. The jacket's zipper is mostly closed. On the right chest area, a crisp, white-bordered, black rectangular patch with the bold white number '541' in a clean sans-serif font is meticulously embroidered. On the left chest area, a smaller, vibrant blue rectangular patch is firmly sewn, without any number or symbol. The tracksuit shows realistic folds and subtle creases, and subtle dark splatters or stains are visible across the front, suggesting dirt or past incidents without being explicitly graphic.
The subject's expression is intensely serious, watchful, and slightly troubled, with eyes directly meeting the viewer's gaze. The mouth is set in a firm, straight line, indicating resolve or suppressed emotion. The overall expression should convey a sense of guardedness, introspection, and quiet intensity, precisely matching the mood of the reference image.
Background: The background is an exact replication of a brightly colored, surreal, and somewhat unsettling child's room. The walls are painted in soft pastel colors (light pinks, yellows, blues). They are adorned with large, abstract, childlike cut-outs or painted shapes: large pink hearts, blue birds, and brightly colored geometric houses with simple cross windows. The perspective of the room is slightly distorted, creating an unsettling, almost dreamlike quality. The floor appears to be a continuation of the playful yet eerie aesthetic. There are no other people or distracting elements in the background.
Lighting and Atmosphere: The scene is illuminated by soft, diffused, and somewhat artificial ambient lighting, originating from unseen sources within the whimsical room. This lighting creates gentle highlights and soft shadows on the subject's face and uniform, emphasizing their serious expression against the deceptively cheerful background. The colors of the background elements are vibrant but not overly harsh. The overall mood is one of strange contrast between childlike innocence and a pervasive sense of underlying tension or unease.
Focus and Detail: Emphasize ultra-realistic texture on the tracksuit fabric (with visible stitching and splatters), the skin, and the patches. The depth of field is shallow, ensuring the subject's face and upper body are rendered in absolute, impeccable sharpness, while the whimsical room background is beautifully blurred, enhancing the sense of depth and the subject's prominence. Professional photography quality is paramount, free from any digital artifacts.
The composition is centered, highlighting the subject's solitary presence and the contrast with the peculiar background with vignette. Aspect ratio 9:16 (portrait).`,

    `The provided image of the subject should be depicted in a medium shot, preserving every detail of their facial features, proportions, and expressions—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting.
The subject's face MUST clearly and undeniably convey a deeply worried, fragile, and emotionally weary expression, precisely mirroring the look of anxious apprehension in the provided reference image. It MUST be absolutely devoid of any hint of aggressive intent or simple relaxation. Their eyes are open, reflecting sadness, worry, and intense awareness of their surroundings. The eyebrows are noticeably furrowed in deep concern. The mouth is closed in a tight, slightly downturned line, indicating stress, emotional pain, and vulnerability. This nuanced expression is paramount and MUST communicate a powerful sense of quiet suffering, anxiety, and a fragile determination to endure. Absolutely NO aggressive, casual, or indifferent expressions are permissible; the face MUST radiate vulnerability and palpable worry.
The subject's body is posed with a distinct gesture of self-comfort and anxiety: both hands are actively holding or grasping the collar/upper zipper area of the tracksuit jacket, pulling it slightly closed, suggesting emotional or physical vulnerability and a need for self-protection. Shoulders are slightly hunched forward. The overall body language conveys a sense of defensiveness and quiet distress.
They are wearing a thick, textured dark green tracksuit jacket, made of a durable, slightly worn polyester blend, with prominent, clean white stripes (approximately 3cm wide) precisely positioned along the outer seams of the shoulders and sleeves, extending down to the cuffs. The jacket's zipper is mostly closed, reaching the neck. Slight wear and tear, including minor abrasions or faint dirt marks, should be visible on the jacket. On the right chest area, a crisp, white-bordered, black rectangular patch with the bold white number '541' in a clean sans-serif font is meticulously embroidered. On the left chest area, a striking rectangular patch, roughly 7cm by 5cm, with a vibrant red background and a bold white 'X' centrally placed, is firmly sewn. The fabric of the tracksuit should show realistic folds and subtle creases, particularly around the hands grasping the collar.
The background is an exact replication: a brightly colored, whimsical, and yet visually unstable room. The walls are painted in abstract, chaotic blue and purple shades. A prominent, large, stylized rainbow arc, painted in bright, vibrant colors (yellow, red, orange, green), dominates the center background. Simple, stylized cartoon clouds or puffs of smoke are visible at the base of the rainbow. The overall aesthetic is one of childlike fantasy clashing with the somber reality of the subject. There are no alterations to the elements, proportions, or style of this background. Absolutely no other people are present in the background.
Medium shot portrait, captured with an analog photo tone, emulating a 35mm film aesthetic with subtle grain. Soft, even lighting bathes the scene, originating from unseen sources within the whimsical room, emphasizing the subject's worried expression and the colorful background. A very shallow depth of field ensures the subject is sharply in focus while the playful background is beautifully blurred, enhancing their prominence against the jarring cheerfulness. Realistic, slightly saturated color tones, accurate to traditional film photography, are applied, maintaining the vibrancy of the background while highlighting the subject's pallor. The composition is cinematic, framing the subject centrally. Emphasize ultra-detailed embroidery texture on the patches, realistic fabric folds and shadows on the uniform (especially near the hands), and professional photography quality, free from any digital artifacts. The overall mood is one of chaotic fantasy clashing starkly with quiet emotional distress, anxiety, and vulnerability. Aspect ratio 9:16 (portrait).`,

    `The provided image of the subject should be depicted in a medium shot, preserving every detail of their facial features, proportions, and expressions—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting.
The subject's face must clearly and undeniably convey an expression of bewildered confusion mixed with subtle worry or concern, precisely mirroring the slightly lost and pondering look in the provided reference image. Their eyes are wide, gazing upwards or slightly to the side (as if observing something just out of frame), reflecting a state of perplexity and slight unease. The eyebrows are distinctly raised and furrowed in confusion. The mouth is slightly agape in a hesitant manner, or subtly downturned at the corners, indicating a moment of questioning and uncertainty. This nuanced expression is paramount and MUST communicate a powerful sense of being disoriented, pondering, and slightly apprehensive. Absolutely NO aggressive, calm, or overtly terrified expressions are permissible; the face MUST radiate a thoughtful, slightly bewildered tension.
The subject's body is posed in a relatively still, contemplative manner, with shoulders slightly hunched forward in a subtle gesture of worry. Their arms are held somewhat close to their body, hands relaxed or lightly clasped, conveying a sense of being caught in thought rather than in action. The overall body language suggests a moment of pause and internal processing amidst the strange environment.
They are wearing a thick, textured dark green tracksuit jacket, made of a durable, slightly worn polyester blend, with prominent, clean white stripes (approximately 3cm wide) precisely positioned along the outer seams of the shoulders and sleeves, extending down to the cuffs. The jacket's zipper is fully closed, reaching the base of the neck. On the right chest area, a crisp, white-bordered, black rectangular patch with the bold white number '541' in a clean sans-serif font is meticulously embroidered. On the left chest area, a striking rectangular patch, roughly 7cm by 5cm, with a vibrant red background and a bold white 'X' centrally placed, is firmly sewn. The fabric of the tracksuit should show realistic folds and subtle creases, reflecting the pose and minimal movement.
The background is an exact replication: a brightly colored, whimsical, and yet subtly unsettling room. The walls are painted in varying vibrant shades of blue and purple. Numerous large, abstract, stylized flowers in bright yellow, orange, and pink hues are depicted on the walls, alongside several cartoonish blue and yellow birds with simple, minimalist designs, appearing as if drawn or painted directly onto the walls. The room gives the impression of a child's playroom or an exaggerated storybook setting. The floor is an extension of this whimsical design, possibly depicting a continuation of the colorful patterns or a simple, contrasting color. There are no alterations to the elements, proportions, or style of this background. Absolutely no other people are present in the background.
Medium shot portrait, captured with an analog photo tone, emulating a 35mm film aesthetic with subtle grain. Soft, diffused, and somewhat artificial lighting, originating from unseen sources within the whimsical room, bathes the scene, creating gentle highlights and soft shadows that emphasize the subject's expression and the vibrant background. A very shallow depth of field ensures the subject is sharply in focus while the playful background is beautifully blurred, enhancing their prominence against the unsettling cheerfulness. Realistic, slightly saturated color tones, accurate to traditional film photography, are applied, maintaining the vibrancy of the background while highlighting the subject's thoughtful pallor. The composition is cinematic, framing the subject slightly off-center for visual interest. Emphasize ultra-detailed embroidery texture on the patches, realistic fabric folds and shadows on the uniform, and professional photography quality, free from any digital artifacts. The overall mood is one of whimsical confusion, subtle apprehension, and quiet contemplation. Aspect ratio 9:16 (portrait).`,
  ],
  frontman: [
    `A cinematic, highly detailed close-up portrait of the provided subject, positioned centrally in the frame. The subject is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions and stature as in the reference image. Maintain the identical skin tone, texture, and facial lighting.

The subject is wearing a dark charcoal grey suit or overcoat, made of a fine, structured fabric, with a high collar visible. The subject's right hand (or the hand closest to the center) is grasping the sleek, black geometric mask of the Front Man. The mask is held close to the face, partially obscuring the lower half, creating an intense, mysterious, and vulnerable focal point. The hand wearing a fitted black leather or tactical glove, showing realistic texture and slight creases.

The subject's expression is intensely serious, contemplative, and burdened, with eyes gazing slightly downward or inward, reflecting internal conflict, regret, or deep thought about the authority they wield. The expression must be emotionally layered, conveying both power and vulnerability, precisely matching the mood of the reference image.

Lighting and Atmosphere: The scene is illuminated by dramatic, stylized, and high-contrast neon lighting, characterized by a split-lighting effect using opposing colors: intense neon blue light illuminating one side of the subject's face/body (e.g., the right side) and a strong neon magenta or red light illuminating the other side (e.g., the left side). This creates vibrant, sharp color boundaries and deep, saturated shadows. The light should also cast a strong sheen on the surface of the black mask being held. The background is a dark, indistinct void, allowing the neon light to be the primary visual element. The overall mood is one of intense drama, mystery, and internal conflict.

Focus and Detail: Emphasize ultra-realistic texture on the suit fabric, the skin, the leather glove, and the smooth, reflective surface of the black mask. The depth of field is very shallow, with the subject's eyes and the mask they are holding rendered in absolute, impeccable sharpness. The background is completely dark and blurred. Absolutely no other people or objects are present.

The composition is tightly cropped for maximum emotional impact, focusing heavily on the subject's eyes, the mask, and the dramatic interplay of the neon light. Professional photography quality is paramount, free from any digital artifacts. Aspect ratio 9:16 (portrait).`,
    `A cinematic, highly detailed medium close-up portrait of the provided subject, positioned centrally in the frame. The subject is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions and stature as in the reference image. Maintain the identical skin tone, texture, and facial lighting.

The subject is wearing a dark charcoal grey, high-collared suit or overcoat, made of a fine, structured fabric, exuding an air of sophisticated menace. The subject's right hand (or the hand closest to the center) is gracefully grasping the sleek, black geometric mask of the Front Man. The mask is held subtly, partially obscuring the side of the face, creating an aura of mystery and concealed identity. The hand is wearing a fitted black leather or tactical glove, showing realistic texture and slight creases.

The subject's expression is intensely serious, calm, and subtly authoritative, with eyes directly meeting the viewer's gaze. The expression should convey a sense of quiet power, unwavering control, and an underlying mysterious depth, precisely matching the commanding yet enigmatic mood of the reference image. There should be no overt signs of distress or overt emotional display.

Background: The background is an exact replication of a dark, dense, and mysterious tropical forest or jungle. It is filled with lush, exotic foliage in deep shades of green, purple, and dark red, some featuring intricate, almost surreal patterns. The leaves are large and overlapping, creating a sense of claustrophobia and hidden dangers. Subtle, exotic flowers or bioluminescent elements might be dimly visible within the dense undergrowth, adding to the mystique. The overall aesthetic is one of beautiful but dangerous natural wonder, shrouded in shadow and secrecy. There are no other people or distracting elements in the background.

Lighting and Atmosphere: The scene is illuminated by soft, diffused, and mysterious lighting that mimics dappled light filtering through a dense canopy, creating deep shadows and subtle highlights on the subject's face and suit. A hint of an ethereal glow, perhaps from within the foliage, might subtly illuminate parts of the background. The black mask reflects a soft sheen. The overall mood is one of profound mystery, quiet power, and a sinister elegance.

Focus and Detail: Emphasize ultra-realistic texture on the suit fabric (with visible stitching), the skin, the leather glove, and the smooth, subtly reflective surface of the black mask. The depth of field is shallow, ensuring the subject's face and the mask they are holding are rendered in absolute, impeccable sharpness, while the dense tropical background is beautifully blurred, enhancing the sense of depth and mystery. Professional photography quality is paramount, free from any digital artifacts.

The composition is elegant and centered, highlighting the subject's poised power and the enigmatic nature of the mask. Aspect ratio 9:16 (portrait).`,
    `A cinematic, highly detailed full-body shot of the provided subject, positioned centrally in the frame, serving as the imposing leader of the surrounding forces. The subject is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting. The subject is wearing a sharply tailored, dark charcoal grey suit or overcoat, made of a fine wool blend, with a crisp, impeccably ironed white shirt underneath. The subject stands in a dominant, authoritative, and completely still posture, exuding an air of intense power, mystery, and unquestionable authority. The subject is NOT wearing a mask.

The subject is surrounded by a dense, intimidating, and symmetrically arranged crowd of hundreds of Squid Game Workers in the background and foreground. All Workers are dressed in identical, vividly saturated red full-body jumpsuits made of thick, technical fabric, showing realistic folds and subtle creases.

The arrangement of the Workers MUST be highly structured, precise, and symmetrical, forming a rigid, geometric pattern that powerfully frames and elevates the central subject. Workers in the front and middle rows closest to the subject should prominently display the distinct black masks featuring crisp white geometric shapes: Circle (O), Triangle (Δ), and Square (□). These masks must be randomly yet meticulously distributed to maintain the high symmetry and visual rhythm of the composition. Each mask should have a subtle, reflective sheen.

Lighting and Atmosphere: The entire scene is bathed in harsh, dramatic, and high-contrast red and black lighting. A powerful, focused light source from directly above or slightly in front dramatically highlights the central subject's face, suit, and hands, creating sharp shadows and emphasizing their features. This lighting causes the red jumpsuits of the surrounding Workers to appear intensely saturated and slightly menacing, creating a stark contrast with the subject. The background should gradually but distinctly fade into an absolute, solid black void at the far edges, ensuring the central figure and the meticulously arranged sea of red guards are the undeniable and sole focus of the image. The overall mood is one of overwhelming power, absolute menace, rigid control, suffocating conformity, and immense, chilling scale.

Focus and Detail: Emphasize ultra-realistic fabric textures on both the subject's suit (with visible stitching and button details) and the Workers' jumpsuits, and sharp, almost reflective surfaces on the black masks. A subtle analog film grain or digital noise should be present throughout the image to enhance the gritty, cinematic, and unsettling atmosphere. The depth of field should be very shallow, ensuring the central subject is rendered with impeccable sharpness and detail, while the massive, meticulously arranged mass of red Guards remains clearly recognizable but slightly softened and blurred, enhancing the perception of depth and the subject's prominence. Absolutely no other people or distracting environmental elements are present beyond the structured crowd and the central subject.

The composition is intensely cinematic, framing the subject centrally to maximize their impact and authority. Professional photography quality is paramount, free from any digital artifacts or inconsistencies. The overall mood is one of formidable, unyielding authority and a pervasive sense of dread. Aspect ratio 9:16 (portrait).`,
    `A cinematic, highly detailed full-body shot of the provided subject, positioned centrally in the frame, serving as the imposing leader of the surrounding forces. The subject is depicted with every detail of their facial features, proportions, and expressions perfectly preserved from the reference image—no alterations to eyes, nose, mouth, or facial structure. Crucially, all facial accessories, including any hijab, veil, or head covering, and any type of glasses or eyewear worn by the subject in the reference image, must be perfectly maintained and integrated into the final image. Maintain the identical body proportions, build, and overall physical stature as in the reference image, ensuring realistic head-to-body ratio and natural human proportions. Maintain the identical skin tone, texture, and facial lighting. The subject is wearing a sharply tailored, dark charcoal grey suit or overcoat, made of a fine wool blend, with a crisp, impeccably ironed white shirt underneath. The subject stands in a dominant, authoritative, and completely still posture, exuding an air of intense power, mystery, and unquestionable authority. The subject is NOT wearing a mask.

The subject is surrounded by a dense, intimidating, and symmetrically arranged crowd of hundreds of Squid Game Workers in the background and foreground. All Workers are dressed in identical, vividly saturated red full-body jumpsuits made of thick, technical fabric, showing realistic folds and subtle creases. Each Worker is equipped with a black automatic rifle, intricately detailed with metallic gleam, slung across their chests or held at the ready in a uniform manner.

The arrangement of the Workers MUST be highly structured, precise, and symmetrical, forming a rigid, geometric pattern that powerfully frames and elevates the central subject. Workers in the front and middle rows closest to the subject should prominently display the distinct black masks featuring crisp white geometric shapes: Circle (O), Triangle (Δ), and Square (□). These masks must be randomly yet meticulously distributed to maintain the high symmetry and visual rhythm of the composition. Each mask should have a subtle, reflective sheen.

Lighting and Atmosphere: The entire scene is bathed in harsh, dramatic, and high-contrast red and black lighting. A powerful, focused light source from directly above or slightly in front dramatically highlights the central subject's face, suit, and hands, creating sharp shadows and emphasizing their features. This lighting causes the red jumpsuits of the surrounding Workers to appear intensely saturated and slightly menacing, creating a stark contrast with the subject. The background should gradually but distinctly fade into an absolute, solid black void at the far edges, ensuring the central figure and the meticulously arranged sea of red guards are the undeniable and sole focus of the image. The overall mood is one of overwhelming power, absolute menace, rigid control, suffocating conformity, and immense, chilling scale.

Focus and Detail: Emphasize ultra-realistic fabric textures on both the subject's suit (with visible stitching and button details) and the Workers' jumpsuits, sharp, almost reflective surfaces on the black masks, and the metallic gleam of the weapons. A subtle analog film grain or digital noise should be present throughout the image to enhance the gritty, cinematic, and unsettling atmosphere. The depth of field should be very shallow, ensuring the central subject is rendered with impeccable sharpness and detail, while the massive, meticulously arranged mass of red Guards remains clearly recognizable but slightly softened and blurred, enhancing the perception of depth and the subject's prominence. Absolutely no other people or distracting environmental elements are present beyond the structured crowd and the central subject.

The composition is intensely cinematic, framing the subject centrally to maximize their impact and authority. Professional photography quality is paramount, free from any digital artifacts or inconsistencies. The overall mood is one of formidable, unyielding authority and a pervasive sense of dread. Aspect ratio 9:16 (portrait).`,
  ],
  group: [
    `A dynamic product photography style image featuring a group of premium collectible action figures, arranged on a clean, slightly reflective black or dark grey surface, typical of product photography for action figures. The background is a blurred, futuristic setting with subtle lighting.
Each action figure in the group is to be generated by applying the visual characteristics, original clothing, and accessories of one individual from the provided group subject photo.
For each individual figure:

It is rendered as a premium collectible action figure, with every detail of their facial features, original clothing, proportions, and expressions perfectly preserved from their appearance in the reference image—no alterations to eyes, nose, mouth, facial structure, or attire.
Crucially, all clothing, hijab, veil, head covering, glasses, or eyewear worn by the subject in the reference image must be perfectly maintained and integrated, appearing as expertly molded and painted plastic components.
Maintain the identical body proportions and stature as in the reference image, rendered with the distinct, articulated appearance of an action figure.
Maintain the identical skin tone, texture, and facial lighting, but applied to a matte plastic finish.
The pose is standing upright and stable, positioned on an individual black display base (similar to an Avengers: Endgame base).
The pose should be determined and ready for action, with clearly defined articulation points at the joints (e.g., a slight bend in the knees or a relaxed, yet heroic arm position).
Composition and Arrangement:
The figures are arranged in a staggered group formation, similar to the provided group reference image, occupying various heights and depths within the frame to create a sense of scale and interaction. Each figure stands on an individual black base. There should be a sense of implied narrative or readiness for action among the group.
Lighting and Atmosphere: The scene is illuminated by bright, studio-like lighting, designed to showcase each action figure's details, with precise highlights and shadows that emphasize the sculpted forms. The colors are vibrant and saturated, reflecting a high-quality paint application on collectible figures. The background is a clean, slightly reflective black or dark grey surface, providing a dramatic contrast without distraction. The overall mood is one of excitement, joy, and heroic adventure, presented as a premium display piece.
Focus and Detail: Emphasize realistic sculpted textures on the hair, clothing, and accessories, all rendered as if cast from high-quality plastic with intricate paintwork. The depth of field is moderately shallow, with all figures rendered in impeccable sharpness and fine detail. The background is softly blurred.
The composition is designed for maximum impact, showcasing the entire group as stunning collectibles. High-quality cinematic rendering is paramount, free from any digital artifacts, aiming for a style that mimics expertly photographed action figures. Aspect ratio similar to the provided group reference image.
This image is to be generated by applying the action figure aesthetic and a stable standing pose to the subjects, while strictly preserving their original appearance from the uploaded group photo.`,
  ],
};

let selectedImageBase64 = null;
let selectedTheme = null;
let selectedPrompt = null;
let isGenerating = false;
const defaultCaptureLabel = captureBtn.textContent;

const resetApp = () => {
  selectedImageBase64 = null;
  selectedTheme = null;
  selectedPrompt = null;
  resultImg.src = "";
  captureBtn.disabled = false;
  captureBtn.textContent = defaultCaptureLabel;
  showStep("start");
};

const pickPrompt = (theme) => {
  const styles = themes[theme];
  const randomPrompt = styles[Math.floor(Math.random() * styles.length)];
  selectedPrompt = randomPrompt;
};


function startCountdown() {
  return new Promise((resolve) => {
    const cd = document.getElementById("countdown");
    let number = 3;

    cd.classList.remove("hidden");
    cd.classList.add("show");
    cd.innerText = number;

    const timer = setInterval(() => {
      number--;
      if (number === 0) {
        // cd.innerText = "📸";
      } else if (number < 0) {
        clearInterval(timer);
        cd.classList.add("hidden");
        cd.classList.remove("show");
        resolve();
      } else {
        cd.innerText = number;
      }
    }, 900);
  });
}


const capturePortraitFrame = () => {
  if (!webcam.videoWidth || !webcam.videoHeight) return null;

  const canvas = document.createElement("canvas");
  canvas.width = TARGET_WIDTH;
  canvas.height = TARGET_HEIGHT;
  const ctx = canvas.getContext("2d");

  const videoRatio = webcam.videoWidth / webcam.videoHeight;

  let sx = 0;
  let sy = 0;
  let sWidth = webcam.videoWidth;
  let sHeight = webcam.videoHeight;

  if (videoRatio > TARGET_RATIO) {
    sHeight = webcam.videoHeight;
    sWidth = sHeight * TARGET_RATIO;
    sx = (webcam.videoWidth - sWidth) / 2;
  } else {
    sWidth = webcam.videoWidth;
    sHeight = sWidth / TARGET_RATIO;
    sy = (webcam.videoHeight - sHeight) / 2;
  }

  ctx.drawImage(
    webcam,
    sx,
    sy,
    sWidth,
    sHeight,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const dataURL = canvas.toDataURL("image/png");
  return {
    dataURL,
    base64: dataURL.split(",")[1],
  };
};

const requestGeneration = async () => {
  if (isGenerating || !selectedImageBase64 || !selectedPrompt) return;

  try {
    isGenerating = true;
    captureBtn.disabled = true;
    captureBtn.textContent = "Processing...";
    showStep("loading");

    const response = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: selectedPrompt,
        image: selectedImageBase64,
        theme: selectedTheme,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      alert("Error: " + data.error);
      showStep("capture");
      return;
    }

    // tampilkan hasil persis seperti yang diberikan model (tanpa crop)
    resultImg.src = `data:image/png;base64,${data.image}`;
    showStep("result");
  } catch (err) {
    console.error(err);
    alert("Gagal menghubungi server.");
    showStep("capture");
  } finally {
    isGenerating = false;
    captureBtn.disabled = false;
    captureBtn.textContent = defaultCaptureLabel;
  }
};

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => (webcam.srcObject = stream))
  .catch((err) => console.error("Webcam error:", err));

startBtn.addEventListener("click", () => showStep("theme"));

themeButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    selectedTheme = theme;
    pickPrompt(theme);
    showStep("capture");
  })
);

captureBtn.addEventListener("click", async () => {
  if (!selectedTheme || !selectedPrompt) {
    alert("Pilih tema terlebih dahulu.");
    return;
  }

  await startCountdown();

  let frame;
  if (selectedTheme === "group") {
    // gunakan full frame kamera, tanpa crop ke 16:9
    const canvas = document.createElement("canvas");
    canvas.width = webcam.videoWidth;
    canvas.height = webcam.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(webcam, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    frame = { dataURL, base64: dataURL.split(",")[1] };
  } else {
    frame = capturePortraitFrame();
  }

  if (!frame) {
    alert("Webcam belum siap, coba lagi.");
    return;
  }

  selectedImageBase64 = frame.base64;

  requestGeneration();
});

retakeBtn.addEventListener("click", () => {
  showStep("capture");
});

restartBtn.addEventListener("click", resetApp);

resetApp();

// --------------------------------------
//     FILE UPLOAD (ALTERNATIF CAMERA)
// --------------------------------------
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataURL = e.target.result;
    selectedImageBase64 = dataURL.split(",")[1];

    // jika tema sudah dipilih, langsung kirim ke backend (otomatis)
    if (selectedTheme && selectedPrompt && !isGenerating) {
      requestGeneration();
    }
  };
  reader.readAsDataURL(file);
});


const stepStart = document.getElementById("stepStart");
const stepTheme = document.getElementById("stepTheme");
const stepCapture = document.getElementById("stepCapture");

// tombol Back
const backThemeBtn = document.getElementById("backThemeBtn");
const backCaptureBtn = document.getElementById("backCaptureBtn");

// kembali dari stepTheme ke stepStart
backThemeBtn.addEventListener("click", () => {
  stepTheme.classList.remove("active");
  stepStart.classList.add("active");
});

// kembali dari stepCapture ke stepTheme
backCaptureBtn.addEventListener("click", () => {
  stepCapture.classList.remove("active");
  stepTheme.classList.add("active");
});


const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const imgSrc = resultImg.src;
  if (!imgSrc) return;

  // Buat link sementara
  const link = document.createElement("a");
  link.href = imgSrc;
  link.download = "photobooth.png"; // nama file yang akan di-download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// idle

// let idleTime = 0;
// const idleLimit = 30; // detik sebelum idle

// function resetIdleTimer() {
//   idleTime = 0;
// }

// window.addEventListener('mousemove', resetIdleTimer);
// window.addEventListener('keydown', resetIdleTimer);
// window.addEventListener('click', resetIdleTimer);
// window.addEventListener('touchstart', resetIdleTimer);

// const idleOverlay = document.createElement('div');
// idleOverlay.id = 'idleOverlay';
// idleOverlay.style.position = 'fixed';
// idleOverlay.style.top = 0;
// idleOverlay.style.left = 0;
// idleOverlay.style.width = '100%';
// idleOverlay.style.height = '100%';
// idleOverlay.style.background = 'rgba(0,0,0,0.85)';
// idleOverlay.style.color = '#fff';
// idleOverlay.style.display = 'none';
// idleOverlay.style.flexDirection = 'column';
// idleOverlay.style.justifyContent = 'center';
// idleOverlay.style.alignItems = 'center';
// idleOverlay.style.zIndex = 9999;
// idleOverlay.style.fontSize = '1.5rem';
// idleOverlay.innerHTML = `
//     <p>Anda idle, klik tombol untuk kembali ke awal.</p>
//     <button id="idleBackBtn" class="btn btn-primary mt-3">Kembali ke Awal</button>
//   `;
// document.body.appendChild(idleOverlay);

// document.getElementById('idleBackBtn').addEventListener('click', () => {
//   idleOverlay.style.display = 'none';
//   document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
//   document.getElementById('stepStart').classList.add('active');
//   idleTime = 0;
// });

// setInterval(() => {
//   idleTime++;
//   if (idleTime >= idleLimit) {
//     idleOverlay.style.display = 'flex';
//   }
// }, 1000);