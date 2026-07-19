"use client";

export default function HeroImage() {

    return (

        <div className="relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute left-0 top-20 h-[550px] w-[550px] rounded-full bg-primary opacity-10 blur-[180px]" />

  <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary opacity-10 blur-[180px]" />

  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-5 blur-[120px]" />

</div>

            <div className="rounded-[40px] overflow-hidden border border-border shadow-2xl">

                <img
                    src="/ceo1.jpeg"
                    alt="Realtor"
                    className="w-full"
                />

            </div>

            <div className="absolute -left-8 top-20 bg-card border border-border rounded-3xl p-5 shadow-xl">

                <h3 className="font-bold">

                    ₦250M+

                </h3>

                <p className="text-sm text-foreground-muted">

                    Property Sold

                </p>

            </div>

            <div className="absolute -right-8 bottom-20 bg-card border border-border rounded-3xl p-5 shadow-xl">

                <h3 className="font-bold">

                    ⭐ 4.9

                </h3>

                <p className="text-sm text-foreground-muted">

                    Client Rating

                </p>

            </div>

        </div>

    )

}