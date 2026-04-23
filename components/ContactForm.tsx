'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', company:'', phone:'', type:'lms', scope:'', agree:false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!form.name) er.name = '성함을 입력해주세요';
    if (!form.email || !/.+@.+\..+/.test(form.email)) er.email = '올바른 이메일을 입력해주세요';
    if (!form.company) er.company = '기관/회사명을 입력해주세요';
    if (!form.scope || form.scope.length < 20) er.scope = '최소 20자 이상 입력해주세요';
    if (!form.agree) er.agree = '개인정보 수집에 동의해주세요';
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const types = [
    { key: 'lms', label: '엔터프라이즈 LMS' },
    { key: 'training', label: '기업·공공 교육' },
    { key: 'custom', label: '커스텀 웹 개발' },
    { key: 'ops', label: '관리형 운영' },
  ];

  return (
    <form className="contact-form" onSubmit={submit}>
      {sent ? (
        <div className="form-sent">
          <div className="form-sent-icon"><Icon name="check" size={24} stroke={2.5}/></div>
          <h3>접수되었습니다.</h3>
          <p>1 영업일 이내 담당자가 회신드리겠습니다. 감사합니다.</p>
          <Link href="/" className="btn btn-sec">홈으로 돌아가기</Link>
        </div>
      ) : (
        <>
          <div className="form-row">
            <div className="field"><label>성함<span className="req">*</span></label>
              <input value={form.name} onChange={(e)=>set('name', e.target.value)} placeholder="홍길동"/>
              {errors.name && <span className="field-error">{errors.name}</span>}</div>
            <div className="field"><label>회사 이메일<span className="req">*</span></label>
              <input type="email" value={form.email} onChange={(e)=>set('email', e.target.value)} placeholder="name@company.kr"/>
              {errors.email && <span className="field-error">{errors.email}</span>}</div>
          </div>
          <div className="form-row">
            <div className="field"><label>기관/회사명<span className="req">*</span></label>
              <input value={form.company} onChange={(e)=>set('company', e.target.value)} placeholder="주식회사 유니큐브"/>
              {errors.company && <span className="field-error">{errors.company}</span>}</div>
            <div className="field"><label>연락처</label>
              <input value={form.phone} onChange={(e)=>set('phone', e.target.value)} placeholder="02-0000-0000"/></div>
          </div>
          <div className="field">
            <label>프로젝트 유형<span className="req">*</span></label>
            <div className="radio-group">
              {types.map(t => (
                <label key={t.key} className={'radio-tile ' + (form.type === t.key ? 'on' : '')} onClick={()=>set('type', t.key)}>
                  <span className="rdot"/>{t.label}
                </label>
              ))}
            </div>
          </div>
          <div className="field"><label>요구사항<span className="req">*</span></label>
            <textarea rows={5} value={form.scope} onChange={(e)=>set('scope', e.target.value)} placeholder="대략적인 범위, 사용자 규모, 희망 일정, 기존 연동 시스템 등을 자유롭게 작성해 주세요. (최소 20자)"/>
            {errors.scope && <span className="field-error">{errors.scope}</span>}</div>
          <label className="check-row" onClick={()=>set('agree', !form.agree)}>
            <span className={'chkbox ' + (form.agree ? 'on' : '')}><Icon name="check" size={11} stroke={3}/></span>
            <span>문의 응답을 위한 개인정보(성함·이메일·연락처) 수집 및 이용에 동의합니다. 수집된 정보는 상담 회신 외의 목적으로 사용되지 않습니다.</span>
          </label>
          {errors.agree && <span className="field-error">{errors.agree}</span>}
          <button type="submit" className="btn btn-pri btn-xl" style={{marginTop:8}}>상담 요청 보내기 <Icon name="arrow-right" size={16}/></button>
        </>
      )}
    </form>
  );
}
