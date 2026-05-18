import { team } from '../team_members.svelte';

export const theme3 = $state({
	published: true,
	theme_en: 'The Full Armor of God',
	theme_am: 'የእግዚአብሔር ሙሉ ጦር ዕቃ ',
	subtopics: [
		{
			title_en: 'Belt of Truth',
			title_am: 'የእውነት ዝናር',
			description_en: 'A collection of beautiful and heart warming graphics',
			description_am: 'A collection of beautiful and heart warming graphics',
			devotional: {
				devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
				devotional_author_en: [team.EdenTesfaye],
				devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
				devotional_author_am: [team.KibruAbebe]
			},
			study_material: {
				study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
				study_material_author_en: [team.EdenTesfaye],
				study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
				study_material_author_am: [team.KibruAbebe]
			},
			cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052535/6_cubwmd.jpg',
			cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052661/10_eamo6n.png',
			square_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052510/1_q0uywz.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052566/2_ntutlg.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052549/3_nja9l0.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052611/4_wg3gie.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052569/5_eqminh.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052535/6_cubwmd.jpg'
			],
			square_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052581/7_qu3ubn.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052615/8_lvtbzj.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052590/9_duhbgm.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052661/10_eamo6n.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052660/11_vbzhip.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052644/12_t34sx4.png'
			],
			story_en: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052727/13_iresoi.jpg',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052625/14_tfpcnz.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052665/15_j8bhvt.png'
			],
			story_am: [
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052736/16_fw7pck.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779052700/17_nvwuay.png',
				'https://res.cloudinary.com/doh7zyphl/image/upload/v1779141305/18_xxw2h3.png'
			],
			artists: [team.EyuelMelese, team.BereketFikru]
		}
		// {
		//     title_en: 'Breastplate of Righteousness',
		//     title_am: 'የጽድቅን ጥሩር',
		//     devotional: {
		//         devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
		//         devotional_author_en: [team.AkinahomGetahun],
		//         devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
		//         devotional_author_am: [team.RebiraTibebu]
		//     },
		//     study_material: {
		//         study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
		//         study_material_author_en: [team.BethelemMelese],
		//         study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
		//         study_material_author_am: [team.AkinahomGetahun]
		//     },
		//     cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		//     cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		//     square_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745801401/2_czoiyb.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795209/3_d0ngln.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795329/4_touynl.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795323/5_wpq9rr.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798561/6_urqnx8.png',
		//     ],
		//     square_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798654/7_ii2knu.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798626/9_rk8rvd.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798572/10_oaclkg.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795525/11_xkcq3g.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798639/12_p4wpdd.png',
		//     ],
		//     story_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795496/13_yzofgh.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795498/14_vcvtle.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795504/15_kflupl.png',
		//     ],
		//     story_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795511/16_mj1l0l.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798870/17_bieire.jpg',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795502/18_b1lyhp.png',
		//     ],
		//     artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
		// {
		//     title_en: 'Shoes of the Gospel of Peace',
		//     title_am: 'የሰላም ወንጌል ጫማ',
		//     description_en: 'A collection of beautiful and heart warming graphics',
		//     description_am: 'A collection of beautiful and heart warming graphics',
		//     devotional: {
		//         devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
		//         devotional_author_en: [team.AkinahomGetahun],
		//         devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
		//         devotional_author_am: [team.RebiraTibebu]
		//     },
		//     study_material: {
		//         study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
		//         study_material_author_en: [team.BethelemMelese],
		//         study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
		//         study_material_author_am: [team.AkinahomGetahun]
		//     },
		//     cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//     cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//     square_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/1_yroxsc.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_lcq6sg.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/4_cwzrrh.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/5_hfpkrw.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/6_asr46c.png'
		//     ],
		//     square_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/7_xo3tgi.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/8_qkrmkx.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/9_ewl7ox.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/10_zwdu9p.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/12_x274vu.png'
		//     ],
		//     story_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/13_jxtu05.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/14_fd4nuq.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800860/15_kg94dv.png'
		//     ],
		//     story_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800734/16_pi1lbs.jpg',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/17_jsjald.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/18_dvgyf8.png'
		//     ],
		//     artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
		// {
		//     title_en: 'Helmet of Salvation',
		//     title_am: 'የመዳን ራስ ቍር',
		//     devotional: {
		//         devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
		//         devotional_author_en: [team.AkinahomGetahun],
		//         devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
		//         devotional_author_am: [team.RebiraTibebu]
		//     },
		//     study_material: {
		//         study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
		//         study_material_author_en: [team.BethelemMelese],
		//         study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
		//         study_material_author_am: [team.AkinahomGetahun]
		//     },
		//     cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		//     cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		//     square_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798661/1_zadgvw.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745801401/2_czoiyb.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795209/3_d0ngln.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795329/4_touynl.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795323/5_wpq9rr.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798561/6_urqnx8.png',
		//     ],
		//     square_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795456/8_dbsvnk.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798654/7_ii2knu.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798626/9_rk8rvd.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798572/10_oaclkg.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795525/11_xkcq3g.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798639/12_p4wpdd.png',
		//     ],
		//     story_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795496/13_yzofgh.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795498/14_vcvtle.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795504/15_kflupl.png',
		//     ],
		//     story_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795511/16_mj1l0l.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745798870/17_bieire.jpg',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745795502/18_b1lyhp.png',
		//     ],
		//     artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
		// {
		//     title_en: 'Sword of the Spirit',
		//     title_am: 'የመንፈስ ሰይፍ',
		//     description_en: 'A collection of beautiful and heart warming graphics',
		//     description_am: 'A collection of beautiful and heart warming graphics',
		//     devotional: {
		//         devotional_en: './articles/themes/Love, Faith and Hope/Love/devotional_en',
		//         devotional_author_en: [team.AkinahomGetahun],
		//         devotional_am: './articles/themes/Love, Faith and Hope/Love/devotional_am',
		//         devotional_author_am: [team.RebiraTibebu]
		//     },
		//     study_material: {
		//         study_material_en: './articles/themes/Love, Faith and Hope/Love/study_material_en',
		//         study_material_author_en: [team.BethelemMelese],
		//         study_material_am: './articles/themes/Love, Faith and Hope/Love/study_material_am',
		//         study_material_author_am: [team.AkinahomGetahun]
		//     },
		//     cover_en: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//     cover_am: 'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//     square_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/1_yroxsc.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/2_enaiyr.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/3_lcq6sg.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/4_cwzrrh.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/5_hfpkrw.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/6_asr46c.png'
		//     ],
		//     square_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/7_xo3tgi.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/8_qkrmkx.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/9_ewl7ox.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/10_zwdu9p.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/11_edphwm.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/12_x274vu.png'
		//     ],
		//     story_en: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/13_jxtu05.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/14_fd4nuq.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800860/15_kg94dv.png'
		//     ],
		//     story_am: [
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1745800734/16_pi1lbs.jpg',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/17_jsjald.png',
		//         'https://res.cloudinary.com/doh7zyphl/image/upload/v1741484789/18_dvgyf8.png'
		//     ],
		//     artists: [team.AkinahomGetahun, team.RebiraTibebu, team.BethelemMelese]
		// },
	]
});
