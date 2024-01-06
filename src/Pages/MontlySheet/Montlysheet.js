import React from 'react'
import '../MontlySheet/Montlysheet.css'
import { useForm } from "react-hook-form";

function Montlysheet() {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const bdTime = new Date();
    const datetime = bdTime.toLocaleString();
    const [datePart, timePart] = datetime.split(', ');

    const onSubmit = async (data) => {

        console.log(data)
        const mainData = {
            time: data.time,
            sell: data.total_sell,
            bank: data.bank,
            glovo: data.glovo,
            restomatic: data.restomatic,
            cash: data.cash

        }
        console.log(mainData)

        try {
            const response = await fetch('http://localhost:5000/sheetPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('okey done')
            } else {
                console.error('Failed to send data to the server.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };







    return (
        <div className=''>

            <div className=''>
                <div className="shadow-xl">
                    <div className="displayer w-full ">
                        <h2 className="text-center text-2xl font-bold">Monthly <span className='text-red-300'>Sheet {datePart} and {timePart}</span></h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='mx-0'>
                            <div className='grid grid-cols-2 mx-auto' >


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Sell</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Total sell"
                                        className=" input input-bordered w-full "
                                        {...register("total_sell", {
                                            required: {
                                                value: true,
                                                message: 'please type Sells'
                                            }
                                        })}
                                    />

                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Bank</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Bank"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("bank", {
                                            required: {
                                                value: true,
                                                message: 'please type bank sell'
                                            },
                                            minLength: {
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />

                                </div>
                                {/* second? */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Glovo</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Glovo"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("glovo", {
                                            required: {
                                                value: true,
                                                message: 'Glovo type here'
                                            }
                                        })}
                                    />

                                </div>
                                {/* second?? */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="text-xl">Restomatic</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Restomatick"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("restomatic", {
                                            required: {
                                                value: true,
                                                message: 'please type here restomatic'
                                            }
                                        })}
                                    />

                                </div>
                                {/* second?? */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Cash</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Cash"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("cash", {
                                            required: {
                                                value: true,
                                                message: 'Total cash'
                                            }
                                        })}
                                    />

                                </div>
                                <div className="form-control w-full">
                                    <input value={datePart}  className='dis'
                                    {...register("time")}
                        type="text" />
                                </div>

                            </div>
                            <div className='mt-10'>
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                            </div>
                        </form>

                    </div>
                </div>
            </div >


        </div>
    )
}

export default Montlysheet