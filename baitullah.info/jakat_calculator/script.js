




function jakat(){
	var gold,silver,cashInHand,savedCashForHajjEtc,forenignCurrency,cashInBank,inshurance,traseryBillEtc,providentFund,givenLoan,billOfExchange,
	advanced,goodsProducedForSell,valueOfingredients,goodsInProduction,stockedforsell, mujaraba,sharePrice; 



	// diiffent kinds of wealth
	 gold=parseFloat(prompt("১.সোনার বিক্রয় মূল্য (যে কোন আকৃতিতে যে কোন উদ্দেশ্যে আপনার মালিকানা স্বত্বে বিদ্যমান)-তার মূল্য"));
	 silver=parseFloat(prompt("২.রূপার বিক্রয় মূল্য ( যে কোন আকৃতিতে যে কোন উদ্দেশ্যে আপনার মালিকানা স্বত্বে বিদ্যমান)"));
	 cashInHand=parseFloat(prompt("৩. নিজ হাতে কিংবা কোন ব্যক্তি বিশেষের নিকট গচ্ছিত অর্থ"));
	 savedCashForHajjEtc=parseFloat(prompt("৪. ভবিষ্যতে কোন কাজ সম্পাদন করা যেমন: হজ্জ, বিবাহ, গৃহনির্মাণ ও ব্যবসা-বানিজ্য ইত্যাদির উদ্দেশ্যে জমাকৃত অর্থ"));
	 forenignCurrency=parseFloat(prompt("৫. বৈদেশিক মূদ্রা ( দেশীয় মুদ্রায় তার মূল্যমান)"));
	 cashInBank=parseFloat(prompt("৬. ব্যাংক ও অন্যান্য আর্থিক প্রতিষ্ঠানের যে কোন ধরনের একাউন্ট যেমন: কারেন্ট, সেভিংস, ফিক্সড, লকার,D.P.S. , F.D.R. ইত্যাদিতে জমাকৃত অর্থ"));
	 inshurance=parseFloat(prompt("৭. ফেরৎ যোগ্য বীমা পলিসিতে জমাকৃত প্রিমিয়াম"));
	 traseryBillEtc=parseFloat(prompt("৮. যে কোন ধরনের বন্ড, ডিবেঞ্চার ও ট্রেজারী বিল ইত্যাদির ক্রয়মূল্য"));
	 providentFund=parseFloat(prompt("৯. ঐচ্ছিক প্রভিডেন্ট ফান্ডের সমূদয় অর্থ বা বাধ্যতামূলক প্রভিডেন্ট ফান্ডের সাথে স্বেচ্ছায় প্রদত্ব অতিরিক্ত অংশ"));
	 givenLoan=parseFloat(prompt("১০. কাউকে ঋণ হিসেবে প্রদত্ত অর্থ ( যদি ঋণগ্রহীতা তা স্বীকার করে ও তা প্রাপ্তির আশা থাকে)"));
	 billOfExchange=parseFloat(prompt("১১. বিক্রিত পণ্যের মূল্য যা এখনও হস্তগত হয়নি বা বিল অফ এক্সচেঞ্জ"));
	 advanced=parseFloat(prompt("১২. ফ্ল্যাট, বাড়ী, দোকান ইত্যাদি ভাড়া নেয়ার সময় সিকিউটি কিংবা এ্যাডভান্স হিসেবে প্রদত্ত ফেরতযোগ্য অর্থ"));
	 goodsProducedForSell=parseFloat(prompt("১৩. বিক্রয়যোগ্য মজুদ, উৎপাদিত মজুদ এর মূল্য"));
	 valueOfingredients=parseFloat(prompt("১৪. কাঁচামালের মূল্য"));
	 goodsInProduction=parseFloat(prompt("১৫. প্রক্রিয়াধীন পন্য ও মার্কেটিং-প্যাকেজিং পণ্যের মূল্য"));
	 stockedforsell=parseFloat(prompt("১৬. এমন জিনিস যা বিক্রিকরে লাভবান হওয়ার উদ্দেশ্যে কেনা হয়েছে এবং এখনও বিক্রি করার ইচ্ছা বিদ্যমান রয়েছে। যেমন: বিক্রির উদ্দেশ্যে ক্রয়কৃত জমি, প্লট, ফ্ল্যাট, ধান, আলু, পেঁয়াজ, মরিচ, ইট, গরু, ছাগল ইত্যাদির মূল্য."));
	 mujaraba=parseFloat(prompt("১৭. মুজারাবা কিংবা অংশীদারী কারবারে বিনিয়োগকৃত অর্থের নগদ অংশ, তা দ্বারা খরিদকৃত ব্যবসাপণ্য এবং যাকাতযোগ্য লভ্যাংশ."));
	 sharePrice=parseFloat(prompt("১৮. কোম্পানীর শেয়ার ( যা বিক্রি করে লাভ করার আশায় ক্রয় করা হয়েছে)"));


	 // accounts of loan
	 loansForNonBussiness=parseFloat(prompt("ব্যবসা করে লাভবান হওয়ার উদ্দেশ্য ব্যতিরেকে  চিকিৎসা, সাংসারিক বা এ ধরণের প্রয়োজনে নেয়া ঋণ"));
	 dueAmountInBussiness=parseFloat(prompt("বাকীতে ক্রয়কৃত পণ্যের অপরিশোধিত মূল্য যা এই বছরেই আদায় করতে হবে"));
	 dainmohor=parseFloat(prompt("স্ত্রীর দেনমোহর যা এই বছর দেওয়ার ইচ্ছা আছে"));
	 dueAmountInBussiness=parseFloat(prompt("নিজের দোকান, ফ্ল্যাট, বাসা ইত্যাদি ভাড়া দেওয়ার সময় সিকিউরিটি বা এ্যাডভান্স হিসেবে গ্রহীত ফেরতযোগ্য অর্থ"));
	 dueSalalaryOfWorkers=parseFloat(prompt("কর্মচারীদের অনাদায়ী বেতন-ভাতা ইত্যাদি."));
	 dueUtilityBills=parseFloat(prompt("ট্যাক্স, বাড়ি ভাড়া, দোকান ভাড়া, বিদ্যুৎ বিল, গ্যাস বিল, ফোন বিল ইত্যাদি অতীতের আদায়যোগ্য দেনা যা আদায় করা হয়নি."));
	 dueJakatOfPast=parseFloat(prompt("অতীতের যাকাত যা এখনো আদায় করা হয়নি( এটাও ঋণের অর্ন্তভুক্ত কেননা তা পূর্ণই যাকাত হিসেবে আদায় করতে হবে। তারপর  নতুন হিসেব করতে হবে) "));
	 blackMoney=parseFloat(prompt("সুদ বা হারাম উপায়ে অর্জিত অর্থ."));
	 dueAmountToBuyIngredients=parseFloat(prompt("প্রবৃদ্ধি বা ব্যবসার উদ্দেশ্যে নেয়া ঋণ- যা দ্বারা যাকাতযোগ্য সম্পদ যেমন: কাঁচামাল, ব্যবসা পণ্য ইত্যাদি ক্রয় করা হয়েছে"));
	 

	
	 var totalWealth=(gold+silver+cashInHand+savedCashForHajjEtc+forenignCurrency+cashInBank+inshurance+traseryBillEtc+providentFund+givenLoan+
	      billOfExchange+advanced+goodsProducedForSell+valueOfingredients+goodsInProduction+stockedforsell+mujaraba+sharePrice
	      -loansForNonBussiness-dueAmountInBussiness-dainmohor-dueAmountInBussiness-dueSalalaryOfWorkers-dueUtilityBills-dueJakatOfPast
	      -blackMoney-dueAmountToBuyIngredients);		

		if (totalWealth<50000){
		document.write("আপনার উপর যাকাত ফরজ হয়নি");
	} else{
		document.write("আপনার যাকাত হলো" +" = "+totalWealth/40+ " টাকা। আপনি সম্মানের সাথে এক বা একাধিক গরীব লোককে তা দান করে আপনার ফরজ ইবাদতটি আদায় করুন। ");
		}
	
}




 














 


