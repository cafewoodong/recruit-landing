
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

// ⚠️ 여기에 구글 앱 스크립트 배포 URL을 입력해야 합니다.
// 예: "https://script.google.com/macros/s/AKfycbx.../exec"
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1OxyS2gwNmZUHy_J5bCi9ri-UxehqZ-zgr0qAViGeGzK8wJuHSR06bJcF7_icgtrhHg/exec" 

const formSchema = z.object({
  name: z.string().min(2, "이름은 2글자 이상이어야 합니다."),
  phone: z.string().regex(/^010-?([0-9]{4})-?([0-9]{4})$/, "올바른 휴대폰 번호 형식이 아닙니다. (예: 010-1234-5678)"),
  region: z.string().min(1, "거주지역을 입력해주세요."),
  experience: z.string({
    required_error: "경력 사항을 선택해주세요.",
  }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해야 합니다.",
  }),
})

export function RecruitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      region: "",
      privacy: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!GOOGLE_SCRIPT_URL) {
      toast.error("관리자 설정 오류: 구글 스크립트 URL이 설정되지 않았습니다.")
      return
    }

    setIsSubmitting(true)
    try {
      // Google Apps Script로 데이터 전송 (CORS 문제 회피를 위해 no-cors 사용하거나, 
      // 실제 운영 시에는 fetch 모드를 조정해야 함. 여기서는 표준 방식 사용)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 구글 스크립트 응답을 브라우저가 차단하지 않도록 설정
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      // no-cors 모드에서는 응답 내용을 읽을 수 없으므로 성공으로 간주
      setIsSuccess(true)
      toast.success("상담 신청이 완료되었습니다!")
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("전송 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto border-green-200 bg-green-50">
        <CardContent className="pt-6 text-center flex flex-col items-center py-10">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">신청 완료!</h3>
          <p className="text-green-700 text-sm mb-6">
            담당자가 확인 후 빠르게 연락드리겠습니다.<br/>
            잠시만 기다려주세요.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-200 text-green-700 hover:bg-green-100">
            다시 작성하기
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-slate-900 text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold text-center">입사 상담 신청</CardTitle>
        <CardDescription className="text-slate-300 text-center">
          프라임에셋의 투명한 시스템을 경험하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input placeholder="010-0000-0000" {...field} type="tel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>거주지역</FormLabel>
                  <FormControl>
                    <Input placeholder="예: 서울 강남구, 부산 해운대구" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>경력 사항</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="경력을 선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="new">신입 (경력 없음)</SelectItem>
                      <SelectItem value="under_1">1년 미만</SelectItem>
                      <SelectItem value="1_3">1년 ~ 3년</SelectItem>
                      <SelectItem value="over_3">3년 이상</SelectItem>
                      <SelectItem value="manager">관리자/팀장급</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-slate-50">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      개인정보 수집 및 이용 동의
                    </FormLabel>
                    <FormDescription className="text-xs mt-2 block">
                      수집된 정보는 입사 상담 목적으로만 사용되며, 
                      상담 종료 후 파기됩니다.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  접수 중...
                </>
              ) : (
                "상담 신청하기"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
