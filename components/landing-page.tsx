'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle, Check, ArrowRight, Brain, Users, Clock } from 'lucide-react'

export function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#333333]">Mind Clone</h1>
          <Button 
            className="bg-[#F5A623] hover:bg-[#E59513] text-white px-6 py-2 rounded-full"
            asChild
          >
            <a href="https://timerex.net/s/medifund/faea4190">
              <span className="mr-2">無料体験会の予約</span>
              <span className="bg-white text-[#F5A623] text-sm px-2 py-0.5 rounded-full">残り7社</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#ff6699] via-[#ffcc99] to-[#ccffcc] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-relaxed">
              社長に確認したい<br/>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-relaxed">
              その判断をいつでもどこでも。
              </h2>
              <p className="text-xl text-[#666666]">
              経営者の思考を再現したオーダーメイドAIが<br/>24時間体制で判断をサポート。
              </p>
              <p className="text-lg text-[#666666]">
              「社長の判断基準」が会社の資産に。
              </p>
              <Button 
                className="bg-[#F5A623] hover:bg-[#E59513] text-white px-8 py-6 text-lg rounded-full"
                asChild
              >
                <a href="https://timerex.net/s/medifund/faea4190">
                  <span className="mr-2">無料体験会に参加する</span>
                  <span className="bg-white text-[#F5A623] text-sm px-2 py-0.5 rounded-full">残り7社</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-[#666666] mt-2">
                当日は有名経営者の思考をインストールしたAIチャットに体験相談
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/mindcone_mockup.png"
                alt="Mind Clone Interface"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section with updated styling and animation */}
      <section className="relative bg-[#F5F5F5] py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute -right-1/4 top-0 text-9xl font-bold text-[#00000005]"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            One more brain for you.
          </motion.div>
          <motion.div
            className="absolute -left-1/4 bottom-0 text-9xl font-bold text-[#00000005]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            One more brain for you.
          </motion.div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-8">
              <div className="flex flex-col items-center">
                <h2 
                  className="text-3xl font-bold mb-8 writing-vertical-rl text-right whitespace-nowrap"
                  style={{
                    writingMode: 'vertical-rl',
                    background: 'linear-gradient(180deg, #FF6B6B 0%, #4834D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    height: '400px',
                    lineHeight: '2.5',
                  }}
                >
                  経営者の時間を開放し、<br />
                  組織の変化を加速させる。
                </h2>
                <p className="text-lg text-[#666666] mt-8">
                  MindCloneが独自に経営判断するのではなく、<br />
                  これまでの社長自身の経験、哲学がアドバイスを行います。<br/>
                  もう経営コンサルタントの回答を待つ必要はありません。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: '経営判断の基準を全社で共有',
                  description: '部門や担当者が違っても、一貫した判断基準で意思決定が可能に。経営理念に沿った判断が会社全体に自然と浸透します。'
                },
                {
                  icon: Users,
                  title: '部下の意思決定力が向上し、経営者の時間が創出',
                  description: '部下は「社長の判断基準」をいつでも確認できるため、自信を持って意思決定が可能に。経営者は本来の経営判断に集中できます。'
                },
                {
                  icon: Clock,
                  title: '相談対応の時間から解放',
                  description: '24時間365日、経営者の思考を再現したAIが部下からの相談に対応。夜間や休日の緊急判断にも即座に対応し、社長に急な着信が届く機会が減ります。'
                }
              ].map((item, index) => (
                <Card key={index} className="border-none">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-[#00A0E9] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#333333] mb-2">{item.title}</h3>
                    <p className="text-[#666666]">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#333333] text-center">実際の活用シーン</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: '商談での値引き判断',
                    question: 'この案件はどこまで値引きできますか？',
                    answer: '経営方針に基づいた具体的な判断基準を即時に提示'
                  },
                  {
                    title: '新規取引先の評価',
                    question: 'このような企業との取引をどう判断すべきですか？',
                    answer: '過去の判断事例を踏まえた評価ポイントを提示'
                  },
                  {
                    title: '採用面接での判断',
                    question: 'この候補者をどう評価すべきですか？',
                    answer: '経営者の重視する価値観に基づく評価軸を提示'
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-none">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-[#333333] mb-4">{item.title}</h4>
                      <p className="text-[#666666] mb-2">Q: {item.question}</p>
                      <p className="text-[#00A0E9]">A: {item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#333333] mb-8">
                今の経営、こんな課題を抱えていませんか？
              </h2>
            </div>

            {/* Daily Scenario Section */}
            <Card className="bg-[#F5F5F5] border-none max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#333333] mb-6 text-center">
                  毎日、「考えたら分かるだろ」の繰り返し。
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                    <MessageCircle className="text-[#00A0E9] h-6 w-6 flex-shrink-0" />
                    <p>この見積もり、このままで大丈夫でしょうか</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                    <MessageCircle className="text-[#00A0E9] h-6 w-6 flex-shrink-0" />
                    <p>新規取引先からの提案、どう返答しましょうか</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                    <MessageCircle className="text-[#00A0E9] h-6 w-6 flex-shrink-0" />
                    <p>採用面接の結果について、最終判断をお願いします</p>
                  </div>
                </div>
                <p className="text-center mt-6 text-[#666666]">
                  気づけば夜の9時。<br />
                  今日も結局、重要な経営判断は後回しに...。
                </p>
              </CardContent>
            </Card>

            {/* Common Issues Section */}
            <Card className="bg-[#F5F5F5] border-none max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#333333] mb-6 text-center">
                  多くの中堅企業経営者が直面する課題
                </h3>
                <ul className="space-y-4 max-w-xl mx-auto">
                  {[
                    '月40時間以上が日常的な判断対応に',
                    '新規事業の検討が進まない',
                    '幹部が育たない',
                    '社長不在時の意思決定が停滞',
                    '事業承継の準備が進まない'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="text-[#00A0E9] h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Customer Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
              実際にご利用いただいた経営者様の声
            </h2>
            <div className="space-y-8">
              {[
                {
                  name: 'S.K様（42歳）',
                  company: 'パーソナルジム経営',
                  testimonial: '正直、最初は半信半疑でした。でも実際に使ってみて、目から鱗が落ちる思いでしたね。例えば、無料体験をどうするか悩んでいた時のことです。閑散期だけでも無料体験を出そうかと考えていたんですが、MindCloneに相談したところ、「無料体験で集客するより、この時期だからこそできる既存会員様への○○施策の方が効果的」という具体的なアドバイスをもらえました。税務の相談にも使えるのが意外な発見でした。'
                },
                {
                  name: 'T.M様（45歳）',
                  company: 'オフィス用品販売会社経営',
                  testimonial: '経営者の時間の使い方が、導入前と後では180度変わりました。特に営業部門からの相談が激減しましたね。「お客様からこう言われたけどどうしましょう」「この程度の値引きは認めていいですか」など、似たようなケースの判断依頼が本当に多かったんです。導入してからは、そういった判断の8割くらいはMindCloneが対応してくれます。しかも、私の経営方針に沿った回答をしてくれるので安心です。'
                },
                {
                  name: 'K.Y様（34歳）',
                  company: '美容クリニック経営',
                  testimonial: '経営者として難しい判断を迫られた時、本当に心強い存在でした。例えば、売上は作れるけれど問題のある行動が続くカウンセラーの処遇について悩んでいた時のことです。MindCloneは過去の類似ケースや経営理念を踏まえた上で、「改善するよう指導した上で改善が見られない場合は退職勧奨も検討すべき」という明確な判断基準を示してくれました。分かっていた回答ではありますが、自分の価値観を合った説明をされると腑に落ちた意思決定ができました。'
                }
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-lg max-w-4xl mx-auto">
                  <CardContent className="p-8">
                    <p className="text-[#666666] mb-6 text-lg">{item.testimonial}</p>
                    <div>
                      <p className="font-bold text-[#333333]">{item.name}</p>
                      <p className="text-[#666666]">{item.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                特別モニター価格のご案内
              </h2>
              <p className="text-lg text-[#666666]">
                ～「次世代の経営の型」を共に創る10社様を募集～
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#333333]">通常価格</h3>
                  <div className="space-y-2 text-[#666666]">
                    <p>初期費用：30万円</p>
                    <p>月額費用：5万円</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#00A0E9] bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#00A0E9]">モニター価格（84%OFF）</h3>
                  <div className="space-y-2 text-[#666666]">
                    <p>初期費用：4.8万円</p>
                    <p>月額費用：0.8万円（3ヶ月固定）</p>
                  </div>
                  <Button className="w-full mt-4 bg-[#F5A623] hover:bg-[#E59513] text-white" asChild>
                    <a href="https://timerex.net/s/medifund/faea4190">
                      <span className="mr-2">無料相談</span>
                      <span className="bg-white text-[#F5A623] text-sm px-2 py-0.5 rounded-full">残り7社</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center text-[#666666]">
              <p className="font-bold mb-2">※モニター条件</p>
              <ul className="space-y-1">
                <li>15分動画インタビューにご協力いただける方</li>
                <li>経営における価値基準が明確な方</li>
              </ul>
              <p className="mt-4">モニター枠が埋まり次第通常料金でのご案内になります。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">含まれるサービス</h3>
                <ul className="space-y-2">
                  {[
                    '2時間の徹底ヒアリング',
                    '判断基準の整理と体系化',
                    '組織展開サポート',
                    '月次での改善支援',
                    '緊急時サポート'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="text-[#00A0E9] h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">導入後のサポート</h3>
                <p className="mb-4">毎月の精度向上</p>
                <ul className="space-y-2">
                  {[
                    '実際の使用データを分析',
                    '経営者との月次面談で判断基準をアップデート',
                    '不適切な回答の即時修正と改善'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="text-[#00A0E9] h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#333333]">
              一度ご相談ください。
            </h2>
            <p className="text-lg text-[#666666]">
              モニター特別価格（84%OFF）で、<br />
              組織の新しい一歩を踏み出しませんか？
            </p>
            <div className="space-y-4">
              <p className="text-[#666666]">【お申し込み方法】</p>
              <p className="text-[#666666]">下記のボタンよりお進みください。<br />2営業日以内に担当者よりご連絡させていただきます。</p>
            </div>
            <Button 
              className="bg-[#F5A623] hover:bg-[#E59513] text-white px-8 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://timerex.net/s/medifund/faea4190">
                <span className="mr-2">組織変革の相談をする</span>
                <span className="bg-white text-[#F5A623] text-sm px-2 py-0.5 rounded-full">残り7社様</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-[#666666]">
              3ヶ月以内に、経営判断の効率化を実感できない場合、<br />
              全額返金させていただきます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-[#333333] text-center">
              よくある質問
            </h2>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-[#333333] mb-6">サービスの基本について</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    2時間のヒアリングだけで、本当に経営判断の基準を反映できるのですか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>はい。ただし、2時間のヒアリングはスタートラインです。</p>
                    <p>具体的には：</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>まず重要な判断基準の8割を把握</li>
                      <li>最初の1ヶ月は週次でフィードバックを実施</li>
                      <li>実際の判断事例を蓄積しながら精度を向上</li>
                      <li>月次面談で継続的に改善</li>
                    </ul>
                    <p>という段階的なアプローチを取ります。</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    機密情報も含まれると思いますが、セキュリティは大丈夫ですか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>はい。検証段階では以下の運用ルールでご利用をお願いいたします</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">1. 機密情報��取り扱い</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>具体的な社名、金額、取引先は一切入力しない</li>
                          <li>「A社」「取引先B」など、仮名化して判断基準を実装</li>
                          <li>数値基準は「売上の〇%以内」など、相対値での実装</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">2. 判断基準の実装方法</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>「この程度の案件なら任せてよい」</li>
                          <li>「ここまでは部長判断で可能」</li>
                          <li>「この条件なら値引き可能」</li>
                        </ul>
                        <p>など、具体的な数字や名称を含まない判断基準のみ実装</p>
                      </div>

                      <div>
                        <p className="font-medium">3. 運用ルール</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>機密情報を含む質問は禁止（社内ガイドライン配布）</li>
                          <li>システムは判断の「方向性」の確認に利用</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">4. 検証期間について</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>2-3ヶ月の限定的な検証</li>
                          <li>効果が確認できた段階で、セキュアな自社開発システムに移行</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <p>これは、例えば以下のような使い方を想定しています：</p>
                      
                      <div className="bg-[#F5F5F5] p-4 rounded-lg">
                        <p className="font-medium">▼適切な使用例</p>
                        <p>Q：「新規取引先から30%の値引きを要求されました。検討してよいでしょうか？」</p>
                        <p>A：「新規取引の値引きは、以下の基準で判断します：</p>
                        <ol className="list-decimal pl-6">
                          <li>取引予定額が年間売上の5%を超える場合</li>
                          <li>3年以上の継続取引が見込める場合</li>
                        </ol>
                        <p>→この2条件を満たせば、20%までの値引きを検討可能です」</p>
                      </div>

                      <div className="bg-[#F5F5F5] p-4 rounded-lg">
                        <p className="font-medium">▼対面相談が必要な例</p>
                        <p>Q：「A社との取引について、与信枠を拡大してよいでしょうか？」</p>
                        <p>A：「与信枠の変更は、経営戦略に関わる重要判断となります。対面での相談をお願いします」</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    導入にあたって、社内の業務負荷は増えませんか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>コミュニケーション不足によるやり直し業務やレスポンス��ちの時間を大きく削減できる可能性があり、むしろ業務効率は向上します。</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>初期設定は当社が全面支援</li>
                      <li>判断履歴は自動で蓄積</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-bold text-[#333333] mb-6 mt-12">効果と運用について</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    判断を任せすぎて、かえって経営が疎かになりませんか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>むしろ、重要な経営判断に集中できるようになります。</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>定型的な判断のみを委託</li>
                      <li>重要判断は従来通り経営者が実施</li>
                      <li>むしろ「どの判断を任せるか」という基準も経営者と相談しながら設定します</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    間違った判断が出た場合はどうなりますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>本サービスは間違った回答をすることがあります。最終的な意思決定はお客様によって行われます。あくまで思考や判断の補助ツールとしてご利用ください。</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-bold text-[#333333] mb-6 mt-12">契約と費用について</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">
                    途中解約は可能ですか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666]">
                    <p>はい。3ヶ月の初期契約後は、月単位での解約が可能です。また、初期3ヶ月以内で効果を実感できない場合は、全額返金保証もございます。</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-medium">
                    追加料金は発生しますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>基本的に追加料金は発生しません。</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>質問回数無制限</li>
                      <li>アップデート費用も込み</li>
                      <li>月次面談も含む</li>
                      <li>緊急対応も追加費用なし</li>
                    </ul>
                    <p>ただし、以下の場合は別途ご相談となります：</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>複数事業での導入</li>
                      
<li>グループ会社への展開</li>
                      <li>カスタマイズ開発が必要な場合</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-medium">
                    モニター価格はいつまで適用されますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>モニター価格は、先着10社様限定です。契約後3ヶ月間は、月額0.8万円（通常5万円）が適用されます。4ヶ月目以降も、モニター企業様には特別価格（月額2.5万円）を継続適用いたします。</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-bold text-[#333333] mb-6 mt-12">導入後のサポート</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left font-medium">
                    他社の活用事例は共有されますか？
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] space-y-4">
                    <p>はい。以下の形で共有を予定しています。</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>月次での優良事例レポート</li>
                      <li>経営者同士の情報交換会（任意参加）</li>
                      <li>業種別の活用事例集</li>
                      <li>導入企業様限定のナレッジ共有会</li>
                    </ul>
                    <p className="text-sm mt-4">※すべての情報は、提供企業様の承諾を得た上で、機密情報を除いた形で共有しています。</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
            <a href="https://medifund.jp/guide_agreement/" className="text-sm text-gray-600 hover:text-gray-900">利用規約</a>
            <span className="text-gray-300">|</span>
            <a href="https://medifund.jp/privacy-policy/" className="text-sm text-gray-600 hover:text-gray-900">プライバシーポリシー</a>
            <span className="text-gray-300">|</span>
            <a href="https://medifund.jp/guide_transaction/" className="text-sm text-gray-600 hover:text-gray-900">特定商取引に基づく表示</a>
            <span className="text-gray-300">|</span>
            <a href="https://medifund.jp/about/" className="text-sm text-gray-600 hover:text-gray-900">運営者情報</a>
          </div>
          <p className="text-center text-sm text-gray-600">
            © i-SHOT, Inc. All Rights Reserved. 無断転載禁止
          </p>
        </div>
      </footer>
    </div>
  )
}