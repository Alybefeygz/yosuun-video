import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import ajansLogo from '../ajans.png';
import girisimciLogo from '../girişimci.png';
import saticiLogo from '../satıcı.png';
import handImage from './assets/hand.png';

const HeroAnimation = () => {
    const [useLogo2, setUseLogo2] = useState(false);
    const [useGirisimci, setUseGirisimci] = useState(false);
    const [useSatici, setUseSatici] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showCyclingWords, setShowCyclingWords] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
    const [useLogoInsteadOfHand, setUseLogoInsteadOfHand] = useState(false);
    const [useSonraFont, setUseSonraFont] = useState(false);

    // Words that cycle through - 5 complete loops (3 decreasing + 2 fixed)
    const cyclingWords = [
        'GERÇEK', 'YÜK', 'BELIRSIZLIK', 'STRES', 'YALNIZLIK', 'KAOS',
        'GERÇEK', 'YÜK', 'BELIRSIZLIK', 'STRES', 'YALNIZLIK', 'KAOS',
        'GERÇEK', 'YÜK', 'BELIRSIZLIK', 'STRES', 'YALNIZLIK', 'KAOS',
        'GERÇEK', 'YÜK', 'BELIRSIZLIK', 'STRES', 'YALNIZLIK', 'KAOS',
        'GERÇEK', 'YÜK', 'BELIRSIZLIK', 'STRES', 'YALNIZLIK', 'KAOS'
    ];
    const logoControls = useAnimation();
    const hControl = useAnimation();
    const asControl = useAnimation(); // Control for 'as'
    const aControl = useAnimation(); // Control for 'a'
    const plControl = useAnimation(); // Control for 'pl'
    const anControl = useAnimation(); // Control for 'an'
    const toControl = useAnimation();
    const maControl = useAnimation(); // Control for 'ma'
    const keControl = useAnimation(); // Control for 'ke'
    const promiseControl = useAnimation(); // Control for promise text
    const dotControl = useAnimation(); // Control for '.'

    // New Controls
    const bekleControl = useAnimation(); // Control for 'bekle' text
    const hayirControl = useAnimation(); // Control for 'hayır' text
    const boxControl = useAnimation();
    const bizControl = useAnimation();
    const zatenControl = useAnimation();
    const underlineControl = useAnimation();
    const stresControl = useAnimation(); // Control for STRES on black screen
    const boyleKalmakControl = useAnimation(); // Control for 'Böyle kalmak zorunda değil.'
    const akilTextControl = useAnimation(); // Control for 'Akıl' (slides left)
    const artikControl = useAnimation(); // Control for 'artık' (slides right then exits)
    const ondaControl = useAnimation(); // Control for 'onda.' (slides right then exits)
    const artikOndaControl = useAnimation(); // Control for 'artık onda.' combined (for initial animations)
    const handControl = useAnimation(); // Control for hand image
    const handLinesControl = useAnimation(); // Control for decorative lines around hand
    const bundanSonraControl = useAnimation(); // Control for 'Bundan sonra iş böyle ilerler' text
    const magazalarBaglaControl = useAnimation(); // Control for 'Mağazaları bağla' container
    const magazalarTextControl = useAnimation(); // Control for 'Mağazaları bağla' text only
    const magazalarLineControl = useAnimation(); // Control for green line
    const tekEkrandaGorControl = useAnimation(); // Control for 'Tek ekranda gör' text
    const topLeftLineControl = useAnimation(); // Control for top-left green line
    const rightLineControl = useAnimation(); // Control for right-side green line
    const rakipleriIzleControl = useAnimation(); // Control for 'Rakipleri izle' text
    const rakipleriRightLineControl = useAnimation(); // Control for Rakipleri izle right line
    const analizEtControl = useAnimation(); // Control for 'Analiz et' text
    const analizEtRightLineControl = useAnimation(); // Control for Analiz et right line
    const urunleriOptimizeControl = useAnimation(); // Control for 'Ürünleri optimize et' text
    const urunleriOptimizeRightLineControl = useAnimation(); // Control for Ürünleri optimize et right line
    const stokuPlanlaControl = useAnimation(); // Control for 'Stoku planla' text
    const stokuPlanlaRightLineControl = useAnimation(); // Control for Stoku planla right line
    const sosyalMedyaHazirlaControl = useAnimation(); // Control for 'Sosyal medyayı hazırla' text
    const sosyalMedyaHazirlaRightLineControl = useAnimation(); // Control for Sosyal medyayı hazırla right line
    const sureciTakipControl = useAnimation(); // Control for 'Süreci takip et' text
    const sureciTakipRightLineControl = useAnimation(); // Control for Süreci takip et right line
    const detayliRaporlaControl = useAnimation(); // Control for 'Detaylı raporla' text
    const detayliRaporlaRightLineControl = useAnimation(); // Control for Detaylı raporla right line
    const bunlarinHepsiControl = useAnimation(); // Control for 'Bunların hepsini Yosuun yapar.' text
    const bunlarinHepsiRightLineControl = useAnimation(); // Control for final right line

    const onuControl = useAnimation();
    const yaptikControl = useAnimation(); // Control for 'yaptık'
    const checkControl = useAnimation(); // Control for checkmark

    // Controls for "Her şeyi" split
    const herControl = useAnimation();
    const seControl = useAnimation();
    const yiControl = useAnimation();

    // Controls for "yapmak için" split
    const yapControl = useAnimation();
    const makControl = useAnimation();
    const icinControl = useAnimation();

    // Controls for "tek"
    const tControl = useAnimation();
    const eControl = useAnimation();
    const kControl = useAnimation();
    const finalLogoControl = useAnimation(); // Control for final logo
    const ekoControl = useAnimation(); // Control for ekosistem
    const tekContainerControl = useAnimation(); // Control for tek container slide

    // Controls for "carbon neutral"
    const carControl = useAnimation();
    const bonControl = useAnimation();
    const neutControl = useAnimation();
    const tralControl = useAnimation();
    const bgControl = useAnimation(); // Control for background color
    const rakipControl = useAnimation(); // Control for "Rakip" text
    const stokControl = useAnimation(); // Control for "Stok" text
    const analizControl = useAnimation(); // Control for "Analiz" text
    const sosyalMedyaControl = useAnimation(); // Control for "Sosyal Medya" text
    const raporControl = useAnimation(); // Control for "Rapor" text
    const senYapiyorsunControl = useAnimation(); // Control for "sen yapıyorsun" text
    const leftParenControl = useAnimation(); // Control for left parenthesis
    const rightParenControl = useAnimation(); // Control for right parenthesis
    // Controls for "tek başına" segments
    const tekBasinaTeControl = useAnimation();
    const tekBasinaKControl = useAnimation();
    const tekBasinaBaControl = useAnimation();
    const tekBasinaSiControl = useAnimation();
    const tekBasinaNaControl = useAnimation();
    const tekBasinaContainerControl = useAnimation();
    const tekUnderlineControl = useAnimation(); // Control for "tek" underline
    const kimOlursanOlControl = useAnimation(); // Control for "kim olursan ol" text
    const ajansLogoControl = useAnimation(); // Control for ajans logo
    const buYasadiginControl = useAnimation(); // Control for "Bu yaşadığın şey" text
    const cyclingWordsControl = useAnimation(); // Control for cycling words container

    // Variants for decorative lines staggered animation
    const lineVariants = {
        hidden: { opacity: 0 },
        visible: (custom) => ({
            opacity: 1,
            transition: { delay: custom * 0.2, duration: 0.3 }
        })
    };

    useEffect(() => {
        const sequence = async () => {
            // Sequential Initial Appear
            // 1. Logo
            logoControls.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 2. "has"
            hControl.start("visible");
            asControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 3. "a"
            aControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 4. "plan"
            plControl.start("visible");
            anControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 5. "."
            dotControl.start("visible");

            // Wait for container slide start (1s) + 0.1s delay
            await new Promise(resolve => setTimeout(resolve, 1100));

            promiseControl.start("visible");

            // Wait for writing animation (approx 1s)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Trigger simultaneous actions (Phase 1)
            hControl.start("vanish");
            toControl.start("visible");
            logoControls.start("moveRight");

            // Phase 2: 'as' -> 'ma' (0.1s)
            await new Promise(resolve => setTimeout(resolve, 100));
            asControl.start("vanish");
            maControl.start("visible");

            // Phase 3: 'a' vanish (0.15s)
            await new Promise(resolve => setTimeout(resolve, 50));
            aControl.start("vanish");

            // Phase 4: 'pl' vanish (0.20s)
            await new Promise(resolve => setTimeout(resolve, 50));
            plControl.start("vanish");

            // Phase 5: 'an' vanish (0.25s) & 'ke' appear & promise vanish
            await new Promise(resolve => setTimeout(resolve, 50));
            anControl.start("vanish");
            keControl.start("visible");
            promiseControl.start("vanish");

            // Phase 6: 'carbon neutral' appears
            await new Promise(resolve => setTimeout(resolve, 200)); // Wait a bit after logo stops
            carControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            bonControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            neutControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            tralControl.start("visible");

            // Phase 7: Background color change
            await new Promise(resolve => setTimeout(resolve, 700));
            bgControl.start("green");
            setUseLogo2(true);

            // Phase 8: Exit animation (slide down and vanish)
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait on green

            // Trigger exit for all visible elements
            logoControls.start("exit");
            toControl.start("exit");
            maControl.start("exit");
            keControl.start("exit");
            carControl.start("exit");
            bonControl.start("exit");
            neutControl.start("exit");
            tralControl.start("exit");
            promiseControl.start("exit");

            // Wait for exit animation to complete
            await new Promise(resolve => setTimeout(resolve, 300));

            // Phase 9: Turn black instantly
            bgControl.start("black");

            // Phase 10: 'bekle' appears
            bekleControl.start("visible");

            // Phase 11: 'bekle' vanishes instantly, 'hayır' appears instantly
            await new Promise(resolve => setTimeout(resolve, 1000));
            bekleControl.start("instantVanish");
            hayirControl.start("visible");

            // Phase 12: 'hayır' vanishes instantly, screen stays black
            await new Promise(resolve => setTimeout(resolve, 1000));
            hayirControl.start("instantVanish");

            // Phase 13: New Sequence (Box -> biz -> ZATEN -> Underline -> onu)

            // 1. Box
            await new Promise(resolve => setTimeout(resolve, 100));
            boxControl.start("visible");

            // 2. biz
            await new Promise(resolve => setTimeout(resolve, 100));
            bizControl.start("visible");

            // 3. ZATEN
            await new Promise(resolve => setTimeout(resolve, 100));
            zatenControl.start("visible");

            // 4. Underline
            await new Promise(resolve => setTimeout(resolve, 100));
            underlineControl.start("visible");

            // 5. onu & Checkmark
            await new Promise(resolve => setTimeout(resolve, 250));
            onuControl.start("visible");
            checkControl.start("visible");

            // 6. yaptık
            await new Promise(resolve => setTimeout(resolve, 200));
            yaptikControl.start("visible");

            // 7. Background turns green instantly and elements vanish
            await new Promise(resolve => setTimeout(resolve, 1000));
            bgControl.start("green");
            boxControl.start("instantVanish");
            checkControl.start("instantVanish");
            bizControl.start("instantVanish");
            zatenControl.start("instantVanish");
            underlineControl.start("instantVanish");
            onuControl.start("instantVanish");
            yaptikControl.start("instantVanish");

            // 8. 'Her şeyi' sequence (yi -> şe -> Her) sliding from left
            await new Promise(resolve => setTimeout(resolve, 200));
            yiControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            seControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            herControl.start("visible");

            // 9. 'yapmak için' sequence (yap -> mak -> için) sliding from right
            await new Promise(resolve => setTimeout(resolve, 400)); // Wait for previous to finish
            yapControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            makControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            icinControl.start("visible");

            // 10. Wait and then instantly vanish all "Her şeyi yapmak için" text
            await new Promise(resolve => setTimeout(resolve, 1500)); // Wait for text to be visible
            herControl.start("instantVanish");
            seControl.start("instantVanish");
            yiControl.start("instantVanish");
            yapControl.start("instantVanish");
            makControl.start("instantVanish");
            icinControl.start("instantVanish");

            // 11. Final sequence: Logo -> Ekosistem slides right -> Tek slides left
            // Logo appears first
            await new Promise(resolve => setTimeout(resolve, 500));
            finalLogoControl.start("visible");

            // Ekosistem slides from behind logo to the right
            await new Promise(resolve => setTimeout(resolve, 200));
            ekoControl.start("visible");

            // Tek slides from behind logo to the left
            await new Promise(resolve => setTimeout(resolve, 100));
            tControl.start("visible");

            // Wait for all final animations to complete, then vanish instantly
            await new Promise(resolve => setTimeout(resolve, 1000));
            finalLogoControl.start("instantVanish");
            tControl.start("instantVanish");
            ekoControl.start("instantVanish");

            // Change background to white for sliding texts
            bgControl.start("white");

            // "Rakip" appears and immediately exits sliding to left
            rakipControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for entry animation to complete
            rakipControl.start("exit");

            // "Stok" appears and immediately exits sliding to left
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for Rakip exit
            stokControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for entry animation to complete
            stokControl.start("exit");

            // "Analiz" appears and immediately exits sliding to left
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for Stok exit
            analizControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for entry animation to complete
            analizControl.start("exit");

            // "Sosyal Medya" appears and immediately exits sliding to left
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for Analiz exit
            sosyalMedyaControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for entry animation to complete
            sosyalMedyaControl.start("exit");

            // "Rapor" appears and immediately exits sliding to left
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for Sosyal Medya exit
            raporControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for entry animation to complete
            raporControl.start("exit");

            // Wait for Rapor exit animation to complete
            await new Promise(resolve => setTimeout(resolve, 300));

            // "tek başına" segments appear one by one from right, pushing previous to left
            // First: "te" appears
            tekBasinaTeControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 150));

            // "k" appears, "te" slides left, underline starts
            tekBasinaKControl.start("visible");
            tekUnderlineControl.start("visible"); // Start underline animation (will complete in ~600ms)
            await new Promise(resolve => setTimeout(resolve, 150));

            // " ba" appears (with space), previous slides left
            tekBasinaBaControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 150));

            // "şı" appears
            tekBasinaSiControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 150));

            // "na" appears
            tekBasinaNaControl.start("visible");

            // Wait for text to form, then scale up the container
            await new Promise(resolve => setTimeout(resolve, 200));
            tekBasinaContainerControl.start("scale");

            // Wait for scale animation to complete, then all vanish and background turns black
            await new Promise(resolve => setTimeout(resolve, 500));
            tekBasinaTeControl.start("instantVanish");
            tekBasinaKControl.start("instantVanish");
            tekBasinaBaControl.start("instantVanish");
            tekBasinaSiControl.start("instantVanish");
            tekBasinaNaControl.start("instantVanish");
            tekBasinaContainerControl.start("instantVanish");
            tekUnderlineControl.start("instantVanish");
            bgControl.start("black");

            // "(sen yapıyorsun)" appears immediately with parentheses
            senYapiyorsunControl.start("visible");
            leftParenControl.start("visible");
            rightParenControl.start("visible");

            // Wait for scale animation to complete (0.5s), then vanish instantly
            await new Promise(resolve => setTimeout(resolve, 500));
            senYapiyorsunControl.start("instantVanish");
            leftParenControl.start("instantVanish");
            rightParenControl.start("instantVanish");

            // "kim olursan ol" appears letter by letter in center
            await new Promise(resolve => setTimeout(resolve, 300));
            kimOlursanOlControl.start("visible");

            // Wait for all letters to appear (14 chars * 80ms = ~1120ms), then slide container left and show logo
            await new Promise(resolve => setTimeout(resolve, 1200));
            kimOlursanOlControl.start("slideLeft");
            ajansLogoControl.start("visible");

            // Wait 1 second then switch to girişimci logo
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUseGirisimci(true);

            // Wait 1 second then switch to satıcı logo
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUseSatici(true);

            // Wait 1 second then vanish everything and change background to white
            await new Promise(resolve => setTimeout(resolve, 1000));
            kimOlursanOlControl.start("instantVanish");
            ajansLogoControl.start("instantVanish");
            bgControl.start("white");
            buYasadiginControl.start("visible");
            setShowCyclingWords(true);

            // Start cycling through words immediately

            // Cycle through all words (30 total - 5 loops of 6 words)
            // First 3 loops (words 1-17): delay decreases from 1000ms to 250ms
            // Last 2 loops (words 18-29): fixed at 250ms
            for (let i = 1; i < 30; i++) {
                let delay;
                if (i < 18) {
                    // First 3 loops: gradually decrease from 1000ms to 250ms
                    const startDelay = 1000;
                    const endDelay = 250;
                    const totalSteps = 17;
                    delay = startDelay - ((startDelay - endDelay) / (totalSteps - 1)) * (i - 1);
                } else {
                    // Last 2 loops: fixed at 250ms
                    delay = 250;
                }
                await new Promise(resolve => setTimeout(resolve, delay));
                setCurrentWordIndex(i);
            }

            // After all loops complete: black background, hide everything, show STRES
            setShowCyclingWords(false); // Hide the cycling words
            bgControl.start("black");
            buYasadiginControl.start("instantVanish");
            stresControl.start("visible"); // Show STRES instantly centered

            // Wait 1 second then STRES slides left, wait for it to finish, then 'Böyle kalmak zorunda değil.' slides in
            await new Promise(resolve => setTimeout(resolve, 1000));
            stresControl.start("slideLeft"); // STRES slides left and disappears
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for STRES animation to complete
            boyleKalmakControl.start("visible"); // 'Böyle kalmak zorunda değil.' slides in from right

            // Wait 1 second then 'Böyle kalmak zorunda değil.' slides up and disappears
            await new Promise(resolve => setTimeout(resolve, 1000));
            boyleKalmakControl.start("slideUp"); // Text slides up and disappears
            await new Promise(resolve => setTimeout(resolve, 300)); // Wait for animation to complete
            bgControl.start("green"); // Background changes to green
            akilTextControl.start("visible"); // 'Akıl' slides up
            artikControl.start("visible"); // 'artık' slides up
            ondaControl.start("visible"); // 'onda.' slides up

            // Wait 1 second then split: 'Akıl' slides left, 'artık onda.' slides right, hand appears
            await new Promise(resolve => setTimeout(resolve, 1000));
            akilTextControl.start("slideLeft"); // 'Akıl' slides left
            artikControl.start("slideRight"); // 'artık' slides right
            ondaControl.start("slideRight"); // 'onda.' slides right
            handControl.start("visible"); // Hand image appears in the middle
            handLinesControl.start("visible"); // Decorative lines appear around hand

            // Wait 1 second then background changes from green to white instantly
            await new Promise(resolve => setTimeout(resolve, 1000));
            bgControl.start("whiteInstant"); // Background instantly changes to white
            handLinesControl.start("greenColor"); // Lines change color to green
            setUseLogoInsteadOfHand(true); // Swap hand image with logo.png

            // Wait 1 second then elements slide left and disappear sequentially
            await new Promise(resolve => setTimeout(resolve, 1000));
            // 1. Akıl slides left first
            akilTextControl.start("exitLeft");
            await new Promise(resolve => setTimeout(resolve, 200));
            // 2. Logo and 6 lines slide left
            handControl.start("exitLeft");
            handLinesControl.start("exitLeft");
            await new Promise(resolve => setTimeout(resolve, 200));
            // 3. artık slides left
            artikControl.start("exitLeft");
            await new Promise(resolve => setTimeout(resolve, 200));
            // 4. onda. slides left
            ondaControl.start("exitLeft");

            // Wait for exit animation to complete, then background turns green instantly
            await new Promise(resolve => setTimeout(resolve, 300));
            bgControl.start("green");
            bundanSonraControl.start("visible"); // Show 'Bundan sonra iş böyle ilerler' text
            // Change sonra font to Permanent Marker at 1.1s (same time as color change)
            setTimeout(() => setUseSonraFont(true), 1100);
            // After all animations complete (1.7s), make everything disappear instantly and change background to white
            setTimeout(() => {
                bundanSonraControl.start("exitInstant");
                setUseSonraFont(false); // Reset sonra font and hide underline
                bgControl.start("whiteInstant"); // Background changes to white instantly
                magazalarBaglaControl.start("visible"); // Show 'Mağazaları bağla' container
                magazalarTextControl.start("visible"); // Show text with slide animation
                magazalarLineControl.start("visible"); // Start line animation
                // After line animation completes (0.4s delay + 0.8s duration = 1.2s), text slides left and disappears
                setTimeout(() => {
                    magazalarTextControl.start("exitLeft");
                    // After text exits (0.3s), line slides left
                    setTimeout(() => {
                        magazalarLineControl.start("slideLeft");
                        // After line slides left (0.6s), show 'Tek ekranda gör' text and shrink left line
                        setTimeout(() => {
                            tekEkrandaGorControl.start("visible");
                            magazalarLineControl.start("shrinkRight"); // Shrink at same time as text appears
                            // Right side line appears 0.5s after text
                            setTimeout(() => {
                                rightLineControl.start("visible");
                                // After right line completes (0.8s), start Rakipleri izle transition
                                setTimeout(() => {
                                    // Tek ekranda gör exits
                                    tekEkrandaGorControl.start("exitLeft");
                                    // After text exits (0.15s), right line slides left
                                    setTimeout(() => {
                                        rightLineControl.start("slideLeft");
                                        // After line slides left (0.6s), show Rakipleri izle + shrink line
                                        setTimeout(() => {
                                            rakipleriIzleControl.start("visible");
                                            rightLineControl.start("shrinkRight");
                                            // New right line appears 0.5s after text
                                            setTimeout(() => {
                                                rakipleriRightLineControl.start("visible");
                                                // After Rakipleri right line completes (0.8s), start Analiz et transition
                                                setTimeout(() => {
                                                    // Rakipleri izle exits
                                                    rakipleriIzleControl.start("exitLeft");
                                                    // After text exits (0.15s), right line slides left
                                                    setTimeout(() => {
                                                        rakipleriRightLineControl.start("slideLeft");
                                                        // After line slides left (0.6s), show Analiz et + shrink line
                                                        setTimeout(() => {
                                                            analizEtControl.start("visible");
                                                            rakipleriRightLineControl.start("shrinkRight");
                                                            // New right line appears 0.5s after text
                                                            setTimeout(() => {
                                                                analizEtRightLineControl.start("visible");
                                                                // After Analiz et right line completes, start Ürünleri optimize et transition
                                                                setTimeout(() => {
                                                                    analizEtControl.start("exitLeft");
                                                                    setTimeout(() => {
                                                                        analizEtRightLineControl.start("slideLeft");
                                                                        setTimeout(() => {
                                                                            urunleriOptimizeControl.start("visible");
                                                                            analizEtRightLineControl.start("shrinkRight");
                                                                            setTimeout(() => {
                                                                                urunleriOptimizeRightLineControl.start("visible");
                                                                                // After Ürünleri optimize et, start Stoku planla transition
                                                                                setTimeout(() => {
                                                                                    urunleriOptimizeControl.start("exitLeft");
                                                                                    setTimeout(() => {
                                                                                        urunleriOptimizeRightLineControl.start("slideLeft");
                                                                                        setTimeout(() => {
                                                                                            stokuPlanlaControl.start("visible");
                                                                                            urunleriOptimizeRightLineControl.start("shrinkRight");
                                                                                            setTimeout(() => {
                                                                                                stokuPlanlaRightLineControl.start("visible");
                                                                                                // After Stoku planla, start Sosyal medyayı hazırla transition
                                                                                                setTimeout(() => {
                                                                                                    stokuPlanlaControl.start("exitLeft");
                                                                                                    setTimeout(() => {
                                                                                                        stokuPlanlaRightLineControl.start("slideLeft");
                                                                                                        setTimeout(() => {
                                                                                                            sosyalMedyaHazirlaControl.start("visible");
                                                                                                            stokuPlanlaRightLineControl.start("shrinkRight");
                                                                                                            setTimeout(() => {
                                                                                                                sosyalMedyaHazirlaRightLineControl.start("visible");
                                                                                                                // After Sosyal medyayı hazırla, start Süreci takip et transition
                                                                                                                setTimeout(() => {
                                                                                                                    sosyalMedyaHazirlaControl.start("exitLeft");
                                                                                                                    setTimeout(() => {
                                                                                                                        sosyalMedyaHazirlaRightLineControl.start("slideLeft");
                                                                                                                        setTimeout(() => {
                                                                                                                            sureciTakipControl.start("visible");
                                                                                                                            sosyalMedyaHazirlaRightLineControl.start("shrinkRight");
                                                                                                                            setTimeout(() => {
                                                                                                                                sureciTakipRightLineControl.start("visible");
                                                                                                                                // After Süreci takip et, start Detaylı raporla transition
                                                                                                                                setTimeout(() => {
                                                                                                                                    sureciTakipControl.start("exitLeft");
                                                                                                                                    setTimeout(() => {
                                                                                                                                        sureciTakipRightLineControl.start("slideLeft");
                                                                                                                                        setTimeout(() => {
                                                                                                                                            detayliRaporlaControl.start("visible");
                                                                                                                                            sureciTakipRightLineControl.start("shrinkRight");
                                                                                                                                            setTimeout(() => {
                                                                                                                                                detayliRaporlaRightLineControl.start("visible");
                                                                                                                                                // After Detaylı raporla, start Bunların hepsini Yosuun yapar. transition
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    detayliRaporlaControl.start("exitLeft");
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        detayliRaporlaRightLineControl.start("slideLeft");
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            detayliRaporlaRightLineControl.start("shrinkRight");
                                                                                                                                                            // Text appears 0.5s after shrink completes (0.8s)
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                bunlarinHepsiControl.start("visible");
                                                                                                                                                            }, 1300);
                                                                                                                                                        }, 600);
                                                                                                                                                    }, 150);
                                                                                                                                                }, 800);
                                                                                                                                            }, 500);
                                                                                                                                        }, 600);
                                                                                                                                    }, 150);
                                                                                                                                }, 800);
                                                                                                                            }, 500);
                                                                                                                        }, 600);
                                                                                                                    }, 150);
                                                                                                                }, 800);
                                                                                                            }, 500);
                                                                                                        }, 600);
                                                                                                    }, 150);
                                                                                                }, 800);
                                                                                            }, 500);
                                                                                        }, 600);
                                                                                    }, 150);
                                                                                }, 800);
                                                                            }, 500);
                                                                        }, 600);
                                                                    }, 150);
                                                                }, 800);
                                                            }, 500);
                                                        }, 600);
                                                    }, 150);
                                                }, 800);
                                            }, 500);
                                        }, 600);
                                    }, 150);
                                }, 800);
                            }, 500);
                        }, 600);
                    }, 150);
                }, 1300);
            }, 2100);
        };
        sequence();
    }, [logoControls, hControl, asControl, aControl, plControl, anControl, toControl, maControl, keControl, promiseControl, carControl, bonControl, neutControl, tralControl, dotControl, bekleControl, hayirControl, boxControl, bizControl, zatenControl, underlineControl, onuControl, yaptikControl, checkControl, herControl, seControl, yiControl, yapControl, makControl, icinControl, tControl, eControl, kControl, finalLogoControl, ekoControl, tekContainerControl]);

    // Animation variants for the "wiggle" effect
    const wiggleVariant = {
        animate: {
            x: [0, -1, 1, -1, 1, 0],
            y: [0, 1, -1, 1, -1, 0],
            transition: {
                duration: 2, // Slow, organic wiggle
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    };

    // Variants for the "write-on" effect
    const pathVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut" }, // 2 seconds to write
                opacity: { duration: 0.1 },
            },
        },
    };

    const containerVariants = {
        hidden: { x: 0 },
        visible: {
            x: -200,
            transition: {
                staggerChildren: 0.05,
                x: { delay: 1, duration: 0.3, ease: "circIn" } // circIn as requested, very fast duration
            },
        },
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.15, ease: "easeOut" },
        },
    };

    const logoVariants = {
        hidden: { y: 40, opacity: 0, x: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.15, ease: "easeOut" }
        },
        moveRight: {
            x: 245, // Adjusted to 245 as requested
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "circIn" }
        },
        exit: {
            y: 30,
            opacity: 0,
            x: 245, // Keep x position
            transition: {
                y: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0, delay: 0.3 }
            }
        }
    };

    const slideUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
        vanish: { opacity: 0, y: 0, transition: { duration: 0.05 } }
    };

    const toVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            y: 30,
            opacity: 0,
            transition: {
                y: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0, delay: 0.3 }
            }
        }
    };

    const makeVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            y: 30,
            opacity: 0,
            transition: {
                y: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0, delay: 0.3 }
            }
        }
    };

    const carbonVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        exit: {
            y: 30,
            opacity: 0,
            transition: {
                y: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0, delay: 0.3 }
            }
        }
    };

    return (
        <motion.div
            className="flex items-center justify-center w-screen h-screen overflow-hidden"
            initial="white"
            animate={bgControl}
            variants={{
                white: { backgroundColor: "#ffffff" },
                green: {
                    backgroundColor: "#78F666",
                    transition: { duration: 0 }
                },
                black: {
                    backgroundColor: "#000000",
                    transition: { duration: 0 }
                },
                whiteInstant: {
                    backgroundColor: "#ffffff",
                    transition: { duration: 0 }
                }
            }}
        >
            {/* Preload logo2 */}
            <img src={logo2} alt="" style={{ display: 'none' }} />

            <motion.div
                className="flex items-center relative" // Added relative for absolute positioning of 'To'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo Animation */}
                <motion.img
                    src={useLogo2 ? logo2 : logo}
                    alt="Logo"
                    className="h-40 md:h-64 object-contain -mr-14 z-10" // z-10 to stay on top if needed
                    variants={logoVariants}
                    initial="hidden"
                    animate={logoControls}
                />

                {/* Text Animation */}
                <motion.div
                    className="relative flex space-x-3 text-4xl md:text-6xl font-bold text-black tracking-tight"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                    {/* 'To' Text - Positioned absolutely */}
                    <motion.div
                        className="absolute right-full mr-20 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={toControl}
                        variants={toVariants}
                    >
                        E-
                    </motion.div>

                    {/* 'ma' Text - Positioned absolutely at start */}
                    <motion.div
                        className="absolute -left-16 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={maControl}
                        variants={makeVariants}
                    >
                        tica
                    </motion.div>

                    {/* 'ke' Text - Positioned after 'ma' to form 'make' */}
                    <motion.div
                        className="absolute left-2 md:left-8 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={keControl}
                        variants={makeVariants}
                    >
                        ret
                    </motion.div>

                    {/* 'carbon neutral' Text */}
                    <div className="absolute left-[190px] md:left-[240px] flex whitespace-nowrap text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                        <motion.span initial="hidden" animate={carControl} variants={carbonVariants}>yü</motion.span>
                        <motion.span initial="hidden" animate={bonControl} variants={carbonVariants}>künü</motion.span>
                        <span className="w-2 md:w-4 inline-block"></span> {/* Space */}
                        <motion.span initial="hidden" animate={neutControl} variants={carbonVariants}>sıfır</motion.span>
                        <motion.span initial="hidden" animate={tralControl} variants={carbonVariants}>la</motion.span>
                    </div>

                    {/* "has" split for 'h' and 'as' control */}
                    <div className="flex">
                        <motion.span initial="hidden" variants={slideUpVariant} animate={hControl}>plan</motion.span>
                        <motion.span initial="hidden" variants={slideUpVariant} animate={asControl}></motion.span>
                    </div>

                    {/* "a" */}
                    <motion.span initial="hidden" variants={slideUpVariant} animate={aControl} className="hidden">

                    </motion.span>

                    {/* "plan" split */}
                    <motion.div
                        className="flex"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } }
                        }}
                    >
                        <motion.span initial="hidden" variants={slideUpVariant} animate={plControl} className="inline-block">ha</motion.span>
                        <motion.span initial="hidden" variants={slideUpVariant} animate={anControl} className="inline-block">zır</motion.span>
                        <motion.span
                            initial="hidden"
                            animate={dotControl}
                            variants={{
                                hidden: { y: 100, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: [0, 1, 1, 0],
                                    transition: {
                                        y: { duration: 0.15, ease: "easeOut" },
                                        opacity: { duration: 0.9, times: [0, 0.1, 0.995, 1] }
                                    }
                                }
                            }}
                            className="inline-block"
                        >
                            .
                        </motion.span>
                    </motion.div>

                    {/* New Text: AND A PROMISE. */}
                    <motion.div
                        className="absolute left-full bottom-full mb-4 ml-4 flex whitespace-nowrap text-3xl md:text-4xl rotate-[-5deg]"
                        style={{
                            fontFamily: '"Permanent Marker", cursive',
                            color: '#78F666'
                        }}
                        initial="hidden"
                        animate={promiseControl}
                        variants={{
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05
                                }
                            },
                            vanish: {
                                opacity: 0,
                                transition: { duration: 0.1 }
                            },
                            exit: {
                                y: 30,
                                opacity: 0,
                                transition: {
                                    y: { duration: 0.3, ease: "easeIn" },
                                    opacity: { duration: 0, delay: 0.3 }
                                }
                            }
                        }}
                    >
                        {"bir de sözümüz.".split('').map((char, index) => {
                            // Pattern: 2 write (indices 0,1), 1 instant (index 2), repeat
                            const isWrite = (index % 3) !== 2;

                            return (
                                <motion.span
                                    key={index}
                                    style={{ display: "inline-block", whiteSpace: "pre" }}
                                    variants={{
                                        hidden: isWrite
                                            ? { clipPath: "inset(0 100% 0 0)", opacity: 1 }
                                            : { opacity: 0, clipPath: "none" },
                                        visible: isWrite
                                            ? { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.1, ease: "linear" } }
                                            : { opacity: 1, transition: { duration: 0.01 } }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </motion.div>

                    {/* New Text: ^ */}
                    <motion.div
                        className="absolute left-full bottom-full -mb-10 -ml-4 whitespace-nowrap text-4xl md:text-5xl rotate-[-5deg]"
                        style={{
                            fontFamily: '"Permanent Marker", cursive',
                            color: '#78F666'
                        }}
                        initial="hidden"
                        animate={promiseControl}
                        variants={{
                            hidden: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
                            visible: {
                                clipPath: "inset(0 0% 0 0)",
                                opacity: 1,
                                transition: {
                                    duration: 0.2,
                                    ease: "linear"
                                }
                            },
                            vanish: {
                                opacity: 0,
                                transition: { duration: 0.1 }
                            },
                            exit: {
                                y: 30,
                                opacity: 0,
                                transition: {
                                    y: { duration: 0.3, ease: "easeIn" },
                                    opacity: { duration: 0, delay: 0.3 }
                                }
                            }
                        }}
                    >
                        ^
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* 'bekle' Text */}
            <motion.div
                className="absolute text-4xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={bekleControl}
                variants={{
                    hidden: { y: -20, opacity: 0 },
                    visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                bekle
            </motion.div>

            {/* 'hayır' Text */}
            <motion.div
                className="absolute text-4xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={hayirControl}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0 }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                hayır
            </motion.div>

            {/* Centered Container for Box and Text */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-6">
                {/* Box Icon */}
                <motion.div
                    className="flex items-center justify-center"
                    initial="hidden"
                    animate={boxControl}
                    variants={{
                        hidden: { y: -20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                >
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                        <path
                            d="M12 15 C 35 12, 65 13, 88 15 C 91 38, 90 65, 88 88 C 65 91, 35 90, 12 88 C 10 65, 13 35, 12 15 Z"
                            stroke="white"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <motion.path
                            d="M28 55 C 35 65, 40 70, 48 75 C 55 65, 90 20, 120 -10"
                            stroke="#78F666"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial="hidden"
                            animate={checkControl}
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                },
                                instantVanish: {
                                    opacity: 0,
                                    transition: { duration: 0 }
                                }
                            }}
                        />
                    </svg>
                </motion.div>

                {/* 'biz ZATEN onu yaptık' Text */}
                <div
                    className="flex space-x-4 text-4xl md:text-6xl font-bold text-white tracking-tight"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                >
                    <motion.span
                        initial="hidden"
                        animate={bizControl}
                        variants={{
                            hidden: { y: -20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.3, ease: "easeOut" }
                            },
                            instantVanish: {
                                opacity: 0,
                                transition: { duration: 0 }
                            }
                        }}
                    >
                        biz
                    </motion.span>

                    {/* ZATEN with Underline */}
                    <div className="relative flex flex-col items-center">
                        <motion.span
                            initial="hidden"
                            animate={zatenControl}
                            style={{
                                fontFamily: '"Permanent Marker", cursive',
                                color: '#78F666'
                            }}
                            variants={{
                                hidden: { y: -20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                },
                                instantVanish: {
                                    opacity: 0,
                                    transition: { duration: 0 }
                                }
                            }}
                        >
                            ZATEN
                        </motion.span>
                        <motion.svg
                            className="absolute top-full mt-1 w-full h-4"
                            viewBox="0 0 100 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            initial="hidden"
                            animate={underlineControl}
                        >
                            <motion.path
                                d="M 5 10 Q 50 15 95 5"
                                stroke="#78F666"
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="none"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    },
                                    instantVanish: {
                                        opacity: 0,
                                        transition: { duration: 0 }
                                    }
                                }}
                            />
                        </motion.svg>
                    </div>

                    <motion.span
                        initial="hidden"
                        animate={onuControl}
                        variants={{
                            hidden: { y: -20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.3, ease: "easeOut" }
                            },
                            instantVanish: {
                                opacity: 0,
                                transition: { duration: 0 }
                            }
                        }}
                    >
                        onu
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={yaptikControl}
                        variants={{
                            hidden: { y: -20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.3, ease: "easeOut" }
                            },
                            instantVanish: {
                                opacity: 0,
                                transition: { duration: 0 }
                            }
                        }}
                    >
                        yaptık
                    </motion.span>
                </div>
            </div>

            {/* Centered Container for Final Text Phase */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
                {/* 'Her şeyi' Text Split */}
                <div className="flex text-4xl md:text-6xl font-bold text-black tracking-tight"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                    <motion.span
                        initial="hidden"
                        animate={herControl}
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        Her&nbsp;
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={seControl}
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        şe
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={yiControl}
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        yi
                    </motion.span>
                </div>

                {/* 'yapmak için' Text Split */}
                <div className="flex text-4xl md:text-6xl font-bold text-black tracking-tight"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                    <motion.span
                        initial="hidden"
                        animate={yapControl}
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        yap
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={makControl}
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        mak&nbsp;
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={icinControl}
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        için
                    </motion.span>
                </div>
            </div>

            {/* Centered Container for final animation */}
            <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hero-page text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
            >
                {/* Final Logo with decorative lines */}
                <div className="relative">
                    {/* Decorative white lines around logo */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full z-0 pointer-events-none decorative-lines"
                        viewBox="-60 -60 120 120"
                        style={{ overflow: 'visible', marginLeft: '-3px' }}
                        initial="hidden"
                        animate={finalLogoControl}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0 } }
                        }}
                    >
                        {/* Top Right - slides from center to top-right */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: 35, y1: -45, x2: 28, y2: -38, opacity: 1,
                                    transition: { delay: 0, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                        {/* Bottom Left - slides from center to bottom-left */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: -35, y1: 45, x2: -28, y2: 38, opacity: 1,
                                    transition: { delay: 0, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                        {/* Top Left - slides from center to top-left */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: -35, y1: -45, x2: -28, y2: -38, opacity: 1,
                                    transition: { delay: 0.15, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                        {/* Bottom Right - slides from center to bottom-right */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: 35, y1: 45, x2: 28, y2: 38, opacity: 1,
                                    transition: { delay: 0.15, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                        {/* Top Center - slides from center to top */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: 0, y1: -52, x2: 0, y2: -45, opacity: 1,
                                    transition: { delay: 0.3, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                        {/* Bottom Center - slides from center to bottom */}
                        <motion.line
                            initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 }}
                            animate={finalLogoControl}
                            variants={{
                                hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0 },
                                visible: {
                                    x1: 0, y1: 52, x2: 0, y2: 45, opacity: 1,
                                    transition: { delay: 0.3, duration: 0.4, ease: "circOut" }
                                },
                                instantVanish: { opacity: 0, transition: { duration: 0 } }
                            }}
                            stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </motion.svg>

                    {/* Final Logo - appears first, stays fixed in center */}
                    <motion.img
                        src={logo2}
                        alt="Final Logo"
                        className="h-40 md:h-64 object-contain z-20 relative"
                        initial="hidden"
                        animate={finalLogoControl}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { duration: 0 }
                            },
                            instantVanish: {
                                opacity: 0,
                                transition: { duration: 0 }
                            }
                        }}
                    />
                </div>

                {/* tek - slides from behind logo to the RIGHT */}
                <motion.span
                    initial="hidden"
                    animate={tControl}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                opacity: { duration: 0 },
                                x: { duration: 0.3, ease: "circOut" }
                            }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                    className="z-10 ml-[-3.5rem]"
                >
                    tek
                </motion.span>

                {/* ekosistem - slides from behind logo to the RIGHT */}
                <motion.span
                    initial="hidden"
                    animate={ekoControl}
                    variants={{
                        hidden: { opacity: 0, x: -150 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                opacity: { duration: 0 },
                                x: { duration: 0.3, ease: "circOut" }
                            }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                    className="z-0 ml-4"
                >
                    ekosistem
                </motion.span>
            </div>

            {/* Rakip Text - appears instantly after final elements vanish */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={rakipControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    exit: {
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Rakip
            </motion.div>

            {/* Stok Text - appears after Rakip exits */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={stokControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    exit: {
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Stok
            </motion.div>

            {/* Analiz Text */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={analizControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    exit: {
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Analiz
            </motion.div>

            {/* Sosyal Medya Text */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={sosyalMedyaControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    exit: {
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Sosyal Medya
            </motion.div>

            {/* Rapor Text */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={raporControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    exit: {
                        opacity: 0,
                        x: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Rapor
            </motion.div>

            {/* "tek başına" Text - segments appear from right, pushing previous to left */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-4xl md:text-6xl font-bold text-black tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial={{ scale: 1 }}
                animate={tekBasinaContainerControl}
                variants={{
                    scale: {
                        scale: 1.5,
                        transition: { duration: 0.5, ease: "easeOut" }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                {/* "tek" with underline wrapper */}
                <div className="relative inline-flex">
                    <motion.span
                        initial="hidden"
                        animate={tekBasinaTeControl}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.15, ease: "easeOut" }
                            },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        te
                    </motion.span>
                    <motion.span
                        initial="hidden"
                        animate={tekBasinaKControl}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.15, ease: "easeOut" }
                            },
                            instantVanish: { opacity: 0, transition: { duration: 0 } }
                        }}
                    >
                        k
                    </motion.span>
                    {/* Underline for "tek" - same style as ZATEN */}
                    <motion.svg
                        className="absolute top-full mt-1 w-full h-4"
                        viewBox="0 0 100 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        initial="hidden"
                        animate={tekUnderlineControl}
                    >
                        <motion.path
                            d="M 5 10 Q 50 15 95 5"
                            stroke="#78F666"
                            strokeWidth="8"
                            strokeLinecap="round"
                            fill="none"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    opacity: 1,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                },
                                instantVanish: {
                                    opacity: 0,
                                    transition: { duration: 0 }
                                }
                            }}
                        />
                    </motion.svg>
                </div>
                <motion.span
                    initial="hidden"
                    animate={tekBasinaBaControl}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.15, ease: "easeOut" }
                        },
                        instantVanish: { opacity: 0, transition: { duration: 0 } }
                    }}
                    className="ml-3"
                >
                    ba
                </motion.span>
                <motion.span
                    initial="hidden"
                    animate={tekBasinaSiControl}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.15, ease: "easeOut" }
                        },
                        instantVanish: { opacity: 0, transition: { duration: 0 } }
                    }}
                >
                    şı
                </motion.span>
                <motion.span
                    initial="hidden"
                    animate={tekBasinaNaControl}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.15, ease: "easeOut" }
                        },
                        instantVanish: { opacity: 0, transition: { duration: 0 } }
                    }}
                >
                    na
                </motion.span>
            </motion.div>

            {/* "(sen yapıyorsun)" Text with Green Parentheses - appears instantly then scales up */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-4xl md:text-6xl font-bold tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={senYapiyorsunControl}
                variants={{
                    hidden: { opacity: 0, scale: 1.5 },
                    visible: {
                        opacity: 1,
                        scale: 2,
                        transition: {
                            opacity: { duration: 0 },
                            scale: { duration: 0.5, ease: "easeOut" }
                        }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                {/* Left Parenthesis - appears instantly with wiggle animation */}
                <motion.span
                    initial="hidden"
                    animate={leftParenControl}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            rotate: [0, -1, 1, -1, 1, 0],
                            transition: {
                                opacity: { duration: 0 },
                                rotate: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }
                            }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                    style={{
                        color: '#78F666',
                        fontFamily: '"Permanent Marker", cursive',
                        transformOrigin: 'center center',
                        display: 'inline-block'
                    }}
                >
                    (
                </motion.span>

                {/* "sen yapıyorsun" Text */}
                <span className="text-white mx-1">
                    sen yapıyorsun
                </span>

                {/* Right Parenthesis - appears instantly with wiggle animation */}
                <motion.span
                    initial="hidden"
                    animate={rightParenControl}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            rotate: [0, 1, -1, 1, -1, 0],
                            transition: {
                                opacity: { duration: 0 },
                                rotate: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                }
                            }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                    style={{
                        color: '#78F666',
                        fontFamily: '"Permanent Marker", cursive',
                        transformOrigin: 'center center',
                        display: 'inline-block'
                    }}
                >
                    )
                </motion.span>
            </motion.div>

            {/* "kim olursan ol" + Ajans Logo Container - centered as a unit */}
            <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-4xl md:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                initial="hidden"
                animate={kimOlursanOlControl}
                variants={{
                    hidden: { x: 100 },
                    visible: {
                        x: 100,
                        transition: {
                            staggerChildren: 0.08
                        }
                    },
                    slideLeft: {
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                {"kim olursan ol".split('').map((char, index) => (
                    <motion.span
                        key={index}
                        style={{ display: 'inline-block', whiteSpace: 'pre', marginTop: '2rem' }}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.1, ease: "easeOut" }
                            }
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
                {/* Ajans Logo with Arrow - appears after text */}
                <motion.div
                    className="flex flex-col items-center -ml-11"
                    initial="hidden"
                    animate={ajansLogoControl}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0 }
                        },
                        instantVanish: {
                            opacity: 0,
                            transition: { duration: 0 }
                        }
                    }}
                >
                    {/* Hand-drawn style arrow pointing down with "ajans" text */}
                    <div className="absolute top-5 right-6" style={{ transform: 'rotate(40deg)' }}>
                        {/* "ajans" text at the top of arrow */}
                        <span
                            className="absolute"
                            style={{
                                fontFamily: '"Caveat Brush", cursive',
                                color: '#78F666',
                                fontSize: '48px',
                                transform: 'rotate(-40deg)',
                                whiteSpace: 'nowrap',
                                textTransform: 'uppercase',
                                top: useGirisimci && !useSatici ? '-5.7rem' : '-4rem',
                                left: '0%',
                                letterSpacing: 'normal',
                                fontWeight: '400'
                            }}
                        >
                            {useSatici ? 'SATICI' : (useGirisimci ? 'GİRİŞİMCİ' : 'AJANS')}
                        </span>
                        <svg
                            width="110"
                            height="90"
                            viewBox="0 0 60 50"
                        >
                            {/* Arrow stem - slightly curved */}
                            <path
                                d="M30 5 Q28 20, 30 35"
                                stroke="#78F666"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                style={{ strokeDasharray: '0', strokeLinejoin: 'round' }}
                            />
                            {/* Arrow head - left side */}
                            <path
                                d="M30 35 L20 25"
                                stroke="#78F666"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                            {/* Arrow head - right side */}
                            <path
                                d="M30 35 L40 25"
                                stroke="#78F666"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <img
                        src={useSatici ? saticiLogo : (useGirisimci ? girisimciLogo : ajansLogo)}
                        alt="Logo"
                        className="h-48 md:h-80 object-contain"
                        style={useSatici ? { transform: 'scale(0.8) translateX(-10px)' } : (useGirisimci ? { transform: 'scale(0.8)' } : {})}
                    />
                </motion.div>
            </motion.div>

            {/* "bu yaşadığın şey" Text - slides left and disappears at 2nd GERÇEK */}
            <motion.div
                className="absolute top-1/2 transform -translate-y-1/2 text-4xl md:text-6xl font-bold text-black tracking-tight flex items-center"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', left: 'calc(50% - 300px)' }}
                initial="hidden"
                animate={buYasadiginControl}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0 }
                    },
                    slideLeftExit: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeIn" }
                    },
                    instantVanish: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                <span className="whitespace-nowrap">bu yaşadığın şey </span>
            </motion.div>

            {/* Cycling words - only shows when background is white */}
            {showCyclingWords && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-start text-4xl md:text-6xl font-bold tracking-tight"
                    initial={{ x: 880 }}
                    animate={cyclingWordsControl}
                    variants={{
                        center: {
                            x: 0,
                            transition: { duration: 0.5, ease: "easeOut" }
                        },
                        centerInstant: {
                            x: 0,
                            transition: { duration: 0 }
                        }
                    }}
                >
                    <motion.span
                        key={currentWordIndex}
                        className="inline-block"
                        style={{ fontFamily: '"Permanent Marker", cursive', color: '#78F666' }}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {cyclingWords[currentWordIndex]}
                    </motion.span>
                </motion.div>
            )}

            {/* STRES text on black screen - appears instantly centered, then slides left like Sosyal Medya */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold"
                initial="hidden"
                animate={stresControl}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0 }
                    },
                    slideLeft: {
                        x: -100,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                <span style={{ fontFamily: '"Permanent Marker", cursive', color: '#78F666' }}>
                    STRES
                </span>
            </motion.div>

            {/* 'Böyle kalmak zorunda değil.' text - slides in from right like Sosyal Medya */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-white"
                initial="hidden"
                animate={boyleKalmakControl}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                    },
                    slideUp: {
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Böyle kalmak zorunda değil.
            </motion.div>

            {/* 'Akıl artık onda.' container - Akıl slides left, artık onda slides right, hand appears in middle */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* 'Akıl' text - slides up then slides left */}
                <motion.span
                    className="text-4xl md:text-6xl font-bold text-black mr-2"
                    initial="hidden"
                    animate={akilTextControl}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        slideLeft: {
                            x: -80,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        exitLeft: {
                            x: -200,
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" }
                        }
                    }}
                >
                    Akıl
                </motion.span>

                {/* Hand image / Logo - appears in middle (absolute so it doesn't take space when hidden) */}
                <motion.img
                    src={useLogoInsteadOfHand ? logo : handImage}
                    alt={useLogoInsteadOfHand ? "logo" : "hand"}
                    className="absolute h-40 md:h-64 object-contain z-10"
                    style={{ left: '34.43%', transform: 'translateX(-100%)' }}
                    initial="hidden"
                    animate={handControl}
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        exitLeft: {
                            x: -200,
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" }
                        }
                    }}
                />

                {/* Decorative white lines around hand - same as tek ekosistem */}
                <motion.svg
                    className="absolute z-0 pointer-events-none"
                    style={{ left: '42.93%', transform: 'translateX(-50%) translateY(-3px)', width: '200px', height: '200px' }}
                    viewBox="-60 -60 120 120"
                    initial="hidden"
                    animate={handLinesControl}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0 } },
                        exitLeft: {
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" }
                        }
                    }}
                >
                    {/* Top Right */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: 35, y1: -45, x2: 28, y2: -38, opacity: 1, stroke: "white",
                                transition: { delay: 0, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                    {/* Bottom Left */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: -35, y1: 45, x2: -28, y2: 38, opacity: 1, stroke: "white",
                                transition: { delay: 0, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                    {/* Top Left */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: -35, y1: -45, x2: -28, y2: -38, opacity: 1, stroke: "white",
                                transition: { delay: 0.15, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                    {/* Bottom Right */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: 35, y1: 45, x2: 28, y2: 38, opacity: 1, stroke: "white",
                                transition: { delay: 0.15, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                    {/* Top Center */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: 0, y1: -52, x2: 0, y2: -45, opacity: 1, stroke: "white",
                                transition: { delay: 0.3, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                    {/* Bottom Center */}
                    <motion.line
                        initial={{ x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" }}
                        animate={handLinesControl}
                        variants={{
                            hidden: { x1: 0, y1: 0, x2: 0, y2: 0, opacity: 0, stroke: "white" },
                            visible: {
                                x1: 0, y1: 52, x2: 0, y2: 45, opacity: 1, stroke: "white",
                                transition: { delay: 0.3, duration: 0.4, ease: "circOut" }
                            },
                            greenColor: {
                                stroke: "#78F666",
                                transition: { duration: 0 }
                            },
                            exitLeft: {
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                        strokeWidth="4" strokeLinecap="round" />
                </motion.svg>

                {/* 'artık' text - slides up then slides right, then exits left */}
                <motion.span
                    className="text-4xl md:text-6xl font-bold text-black"
                    initial="hidden"
                    animate={artikControl}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        slideRight: {
                            x: 60,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        exitLeft: {
                            x: -200,
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" }
                        }
                    }}
                >
                    artık
                </motion.span>
                {/* Space between artık and onda. */}
                <span className="text-4xl md:text-6xl font-bold text-black">&nbsp;</span>
                {/* 'onda.' text - slides up then slides right, then exits left */}
                <motion.span
                    className="text-4xl md:text-6xl font-bold text-black"
                    initial="hidden"
                    animate={ondaControl}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        slideRight: {
                            x: 60,
                            transition: { duration: 0.3, ease: "easeOut" }
                        },
                        exitLeft: {
                            x: -200,
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" }
                        }
                    }}
                >
                    onda.
                </motion.span>
            </div>
            {/* 'Bundan sonra iş böyle ilerler' text - appears with staggered slide-in animation on green background */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold"
                initial="hidden"
                animate={bundanSonraControl}
                variants={{
                    hidden: {},
                    visible: {},
                    exitInstant: {
                        opacity: 0,
                        transition: { duration: 0 }
                    }
                }}
            >
                <motion.span
                    initial={{ x: 75, opacity: 0, color: "#000000" }}
                    variants={{
                        hidden: { x: 75, opacity: 0, color: "#000000" },
                        visible: {
                            x: 0,
                            opacity: 1,
                            color: "#ffffff",
                            transition: {
                                x: { duration: 0.3, ease: "easeOut", delay: 0 },
                                opacity: { duration: 0.3, ease: "easeOut", delay: 0 },
                                color: { duration: 0, delay: 1.1, type: "tween" }
                            }
                        }
                    }}
                >Bundan</motion.span>
                <div className="relative flex flex-col items-center" style={{ marginLeft: '0.3em' }}>
                    <motion.span
                        style={{
                            color: '#000000',
                            fontFamily: useSonraFont ? '"Permanent Marker", cursive' : 'inherit'
                        }}
                        initial={{ x: 75, y: -50, opacity: 0 }}
                        variants={{
                            hidden: { x: 75, y: -50, opacity: 0 },
                            visible: {
                                x: 0,
                                y: 0,
                                opacity: 1,
                                transition: {
                                    x: { duration: 0.3, ease: "easeOut", delay: 0.15 },
                                    opacity: { duration: 0.3, ease: "easeOut", delay: 0.15 },
                                    y: { duration: 0.3, ease: "easeOut", delay: 0.9 }
                                }
                            }
                        }}
                    >sonra</motion.span>
                    {/* Underline for sonra - same style as ZATEN */}
                    <motion.svg
                        className="absolute top-full mt-1 w-full h-4"
                        viewBox="0 0 100 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: useSonraFont ? 1 : 0 }}
                    >
                        <motion.path
                            d="M 5 10 Q 50 15 95 5"
                            stroke="#ffffff"
                            strokeWidth="8"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: useSonraFont ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </motion.svg>
                </div>
                <motion.span
                    style={{ marginLeft: '0.3em' }}
                    initial={{ x: 75, y: 50, opacity: 0, color: "#000000" }}
                    variants={{
                        hidden: { x: 75, y: 50, opacity: 0, color: "#000000" },
                        visible: {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            color: "#ffffff",
                            transition: {
                                x: { duration: 0.3, ease: "easeOut", delay: 0.3 },
                                opacity: { duration: 0.3, ease: "easeOut", delay: 0.3 },
                                y: { duration: 0.3, ease: "easeOut", delay: 0.9 },
                                color: { duration: 0, delay: 1.1, type: "tween" }
                            }
                        }
                    }}
                >iş</motion.span>
                <motion.span
                    style={{ marginLeft: '0.3em' }}
                    initial={{ x: 75, y: -50, opacity: 0, color: "#000000" }}
                    variants={{
                        hidden: { x: 75, y: -50, opacity: 0, color: "#000000" },
                        visible: {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            color: "#ffffff",
                            transition: {
                                x: { duration: 0.3, ease: "easeOut", delay: 0.45 },
                                opacity: { duration: 0.3, ease: "easeOut", delay: 0.45 },
                                y: { duration: 0.3, ease: "easeOut", delay: 0.9 },
                                color: { duration: 0, delay: 1.1, type: "tween" }
                            }
                        }
                    }}
                >böyle</motion.span>
                <motion.span
                    style={{ marginLeft: '0.3em' }}
                    initial={{ x: 75, opacity: 0, color: "#000000" }}
                    variants={{
                        hidden: { x: 75, opacity: 0, color: "#000000" },
                        visible: {
                            x: 0,
                            opacity: 1,
                            color: "#ffffff",
                            transition: {
                                x: { duration: 0.3, ease: "easeOut", delay: 0.6 },
                                opacity: { duration: 0.3, ease: "easeOut", delay: 0.6 },
                                color: { duration: 0, delay: 1.1, type: "tween" }
                            }
                        }
                    }}
                >ilerler</motion.span>
            </motion.div>

            {/* 'Mağazaları bağla' text - appears instantly on white background */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={magazalarBaglaControl}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0 }
                    }
                }}
            >
                <div className="relative flex">
                    {/* Text wrapper that can exit independently */}
                    <motion.div
                        className="flex"
                        initial="hidden"
                        animate={magazalarTextControl}
                        variants={{
                            hidden: {},
                            visible: {},
                            exitLeft: {
                                x: -200,
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" }
                            }
                        }}
                    >
                        <motion.span
                            initial={{ y: -50, opacity: 0 }}
                            variants={{
                                hidden: { y: -50, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, ease: "easeOut", delay: 0 }
                                }
                            }}
                        >Mağazaları</motion.span>
                        <motion.span
                            style={{ marginLeft: '0.3em' }}
                            initial={{ y: -50, opacity: 0 }}
                            variants={{
                                hidden: { y: -50, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.3, ease: "easeOut", delay: 0.15 }
                                }
                            }}
                        >bağla</motion.span>
                    </motion.div>
                    {/* Green line extending to the right - positioned at the end of text */}
                    <motion.div
                        className="absolute top-1/2 h-3 rounded-l-full flex items-center"
                        style={{
                            backgroundColor: '#78F666',
                            width: '100vw',
                            left: '100%',
                            marginLeft: '16px',
                            transform: 'translateY(-50%)',
                            transformOrigin: 'right center'
                        }}
                        initial={{ scaleX: 0 }}
                        animate={magazalarLineControl}
                        variants={{
                            hidden: { scaleX: 0, transformOrigin: 'left center' },
                            visible: {
                                scaleX: 1,
                                transformOrigin: 'left center',
                                transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
                            },
                            slideLeft: {
                                x: '-137vw',
                                transition: { duration: 0.6, ease: "easeIn" }
                            },
                            shrinkRight: {
                                scaleX: 0,
                                transformOrigin: 'right center',
                                transition: { duration: 0.8, ease: "easeIn" }
                            }
                        }}
                    />
                </div>
            </motion.div>

            {/* 'Tek ekranda gör' text - slides in from right */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={tekEkrandaGorControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Tek ekranda gör
            </motion.div>

            {/* Right-side green line extending from text to right edge */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={rightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Rakipleri izle text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={rakipleriIzleControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Rakipleri izle
            </motion.div>

            {/* Rakipleri izle right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={rakipleriRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Analiz et text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={analizEtControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Analiz et
            </motion.div>

            {/* Analiz et right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={analizEtRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Ürünleri optimize et text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={urunleriOptimizeControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Ürünü parlat
            </motion.div>

            {/* Ürünleri optimize et right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={urunleriOptimizeRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Stoku planla text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={stokuPlanlaControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Stoku planla
            </motion.div>

            {/* Stoku planla right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={stokuPlanlaRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Sosyal medyayı hazırla text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={sosyalMedyaHazirlaControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                İçeriği planla
            </motion.div>

            {/* Sosyal medyayı hazırla right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={sosyalMedyaHazirlaRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Süreci takip et text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={sureciTakipControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Süreci takip et
            </motion.div>

            {/* Süreci takip et right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={sureciTakipRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Detaylı raporla text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={detayliRaporlaControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    },
                    exitLeft: {
                        x: -200,
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" }
                    }
                }}
            >
                Detaylı raporla
            </motion.div>

            {/* Detaylı raporla right-side green line */}
            <motion.div
                className="absolute h-3 rounded-full flex items-center"
                style={{
                    backgroundColor: '#78F666',
                    top: '50%',
                    left: '69%',
                    transform: 'translateY(-50%)',
                    transformOrigin: 'left center',
                    width: '100vw'
                }}
                initial={{ scaleX: 0 }}
                animate={detayliRaporlaRightLineControl}
                variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                        scaleX: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    },
                    slideLeft: {
                        x: '-137vw',
                        transition: { duration: 0.6, ease: "easeIn" }
                    },
                    shrinkRight: {
                        scaleX: 0,
                        transformOrigin: 'right center',
                        transition: { duration: 0.8, ease: "easeIn" }
                    }
                }}
            />

            {/* Bunların hepsini Yosuun yapar. text */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-black"
                initial="hidden"
                animate={bunlarinHepsiControl}
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                    }
                }}
            >
                Bunların hepsini Yosuun yapar.
            </motion.div>
        </motion.div >
    );
};

export default HeroAnimation;
